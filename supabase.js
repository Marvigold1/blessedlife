import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.4.0/dist/supabase.min.js';

const supabaseUrl = 'https://waocmhpfxzbkznluvpsb.supabase.co';
const supabaseKey = 'sb_publishable_VotD_ZyQD7uVVXgPoGxgsg_WLN3XEU6';
export const supabase = createClient(supabaseUrl, supabaseKey);