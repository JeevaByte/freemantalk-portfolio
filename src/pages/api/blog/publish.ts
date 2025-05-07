import { supabase } from '../../../integrations/supabase/client';
import fetch from 'node-fetch';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { user_id, title, content, platforms } = req.body;

  if (!user_id || !title || !content || !platforms || !Array.isArray(platforms)) {
    return res.status(400).json({ error: 'Missing or invalid parameters' });
  }

  try {
    // Fetch tokens for user and platforms
    const { data: tokens, error: tokenError } = await supabase
      .from('social_media_tokens')
      .select('*')
      .eq('user_id', user_id)
      .in('platform', platforms);

    if (tokenError) {
      return res.status(500).json({ error: 'Failed to fetch tokens', details: tokenError.message });
    }

    const publishResults = [];

    for (const platform of platforms) {
      const tokenEntry = tokens?.find(t => t.platform === platform);
      if (!tokenEntry) {
        publishResults.push({ platform, success: false, error: 'No token found' });
        continue;
      }

      try {
        if (platform === 'medium') {
          // Publish to Medium
          const userResponse = await fetch('https://api.medium.com/v1/me', {
            headers: { Authorization: `Bearer ${tokenEntry.access_token}` },
          });
          const userData = await userResponse.json();
          if (!userResponse.ok) {
            throw new Error('Failed to fetch Medium user info');
          }
          const userId = userData.data.id;

          const postResponse = await fetch(`https://api.medium.com/v1/users/${userId}/posts`, {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${tokenEntry.access_token}`,
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({
              title,
              contentFormat: 'html',
              content,
              publishStatus: 'public',
            }),
          });

          if (!postResponse.ok) {
            const errorData = await postResponse.json();
            throw new Error(errorData.errors?.[0]?.message || 'Failed to publish Medium post');
          }

          publishResults.push({ platform, success: true });
        } else if (platform === 'linkedin') {
          // Publish to LinkedIn
          // Get LinkedIn user urn
          const profileResponse = await fetch('https://api.linkedin.com/v2/me', {
            headers: { Authorization: `Bearer ${tokenEntry.access_token}` },
          });
          const profileData = await profileResponse.json();
          if (!profileResponse.ok) {
            throw new Error('Failed to fetch LinkedIn profile');
          }
          const author = `urn:li:person:${profileData.id}`;

          const postResponse = await fetch('https://api.linkedin.com/v2/ugcPosts', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${tokenEntry.access_token}`,
              'Content-Type': 'application/json',
              'X-Restli-Protocol-Version': '2.0.0',
            },
            body: JSON.stringify({
              author,
              lifecycleState: 'PUBLISHED',
              specificContent: {
                'com.linkedin.ugc.ShareContent': {
                  shareCommentary: {
                    text: title + '\n\n' + content.replace(/<[^>]+>/g, ''),
                  },
                  shareMediaCategory: 'NONE',
                },
              },
              visibility: {
                'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC',
              },
            }),
          });

          if (!postResponse.ok) {
            const errorData = await postResponse.json();
            throw new Error(errorData.message || 'Failed to publish LinkedIn post');
          }

          publishResults.push({ platform, success: true });
        } else {
          publishResults.push({ platform, success: false, error: 'Unsupported platform' });
        }
      } catch (publishError) {
        publishResults.push({ platform, success: false, error: publishError.message });
      }
    }

    res.status(200).json({ results: publishResults });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error', details: err.message || err });
  }
}
