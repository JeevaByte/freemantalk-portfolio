import { supabase } from './src/integrations/supabase/client';

async function testConnection() {
  try {
    const { data, error } = await supabase.from('projects').select('*').limit(5);
    if (error) {
      console.error('Error fetching projects:', error);
    } else {
      console.log('Sample projects data:', data);
    }
  } catch (err) {
    console.error('Unexpected error:', err);
  }
}

testConnection();
