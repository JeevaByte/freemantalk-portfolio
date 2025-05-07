import { supabase } from '../../../integrations/supabase/client';
import fetch from 'node-fetch';

const CLIENT_ID = process.env.LINKEDIN_CLIENT_ID!;
const CLIENT_SECRET = process.env.LINKEDIN_CLIENT_SECRET!;
const REDIRECT_URI = process.env.LINKEDIN_REDIRECT_URI!;

export default async function handler(req: any, res: any) {
  if (req.method === 'GET') {
    // Step 1: Redirect user to LinkedIn OAuth authorization URL
    const state = req.query.state || '';
    const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&state=${state}&scope=r_liteprofile%20r_emailaddress%20w_member_social`;
    res.redirect(authUrl);
  } else if (req.method === 'POST') {
    // Step 2: Handle OAuth callback with authorization code
    const { code, user_id } = req.body;
    if (!code || !user_id) {
      return res.status(400).json({ error: 'Missing code or user_id' });
    }

    try {
      // Exchange code for access token
      const tokenResponse = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          code,
          redirect_uri: REDIRECT_URI,
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
        }),
      });

      const tokenData = await tokenResponse.json();

      if (!tokenResponse.ok) {
        return res.status(500).json({ error: 'Failed to get access token', details: tokenData });
      }

      const { access_token, expires_in } = tokenData;

      // Store tokens securely in Supabase
      const { error } = await supabase
        .from('social_media_tokens')
        .upsert({
          user_id,
          platform: 'linkedin',
          access_token,
          refresh_token: null,
          token_expires_at: expires_in ? new Date(Date.now() + expires_in * 1000).toISOString() : null,
        }, { onConflict: 'user_id,platform' });

      if (error) {
        return res.status(500).json({ error: 'Failed to store tokens', details: error.message });
      }

      res.status(200).json({ message: 'LinkedIn account connected successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Internal server error', details: err });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
