import { createClient, SupabaseClient } from "@supabase/supabase-js";

// These should be stored in environment variables in a production app
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://your-project.supabase.co";
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "your-anon-key";

// Create a temporary client for development if no credentials are provided
let supabase: SupabaseClient;

// Don't create a client during build time
if (typeof window !== "undefined") {
  supabase = createClient(supabaseUrl, supabaseKey);
} else {
  // Mock client for SSR/build
  supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

export default supabase;
