import { supabase } from '../../../integrations/supabase/client';
import fetch from 'node-fetch';

const CLIENT_ID = process.env.MEDIUM_CLIENT_ID!;
const CLIENT_SECRET = process.env.MEDIUM_CLIENT_SECRET!;
const REDIRECT_URI = process.env.MEDIUM_REDIRECT_URI!;

export default async function handler(req: any, res: any) {
  if (req.method === 'GET') {
    // Step 1: Redirect user to Medium OAuth authorization URL
    const state = req.query.state || '';
    const authUrl = `https://medium.com/m/oauth/authorize?client_id=${CLIENT_ID}&scope=basicProfile,publishPost&state=${state}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;
    res.redirect(authUrl);
  } else if (req.method === 'POST') {
    // Step 2: Handle OAuth callback with authorization code
    const { code, user_id } = req.body;
    if (!code || !user_id) {
      return res.status(400).json({ error: 'Missing code or user_id' });
    }

    try {
      // Exchange code for access token
      const tokenResponse = await fetch('https://api.medium.com/v1/tokens', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code,
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          redirect_uri: REDIRECT_URI,
          grant_type: 'authorization_code',
        }),
      });

      const tokenData = await tokenResponse.json();

      if (!tokenResponse.ok) {
        return res.status(500).json({ error: 'Failed to get access token', details: tokenData });
      }

      const { access_token, refresh_token, expires_at } = tokenData;

      // Store tokens securely in Supabase
      const { error } = await supabase
        .from('social_media_tokens')
        .upsert({
          user_id,
          platform: 'medium',
          access_token,
          refresh_token,
          token_expires_at: expires_at ? new Date(expires_at * 1000).toISOString() : null,
        }, { onConflict: 'user_id,platform' });

      if (error) {
        return res.status(500).json({ error: 'Failed to store tokens', details: error.message });
      }

      res.status(200).json({ message: 'Medium account connected successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Internal server error', details: err });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
