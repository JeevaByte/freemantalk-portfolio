import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/integrations/supabase/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const { data: posts, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('published_at', { ascending: false });

      if (error) throw error;

      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ error: 'Error fetching blog posts' });
    }
  }

  if (req.method === 'POST') {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      const post = req.body;
      const { data, error } = await supabase
        .from('blog_posts')
        .insert([{ ...post, user_id: user.id }])
        .select()
        .single();

      if (error) throw error;

      return res.status(201).json(data);
    } catch (error) {
      return res.status(500).json({ error: 'Error creating blog post' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
} 