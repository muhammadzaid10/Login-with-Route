import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ceyicbnfyhqeljmasupa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNleWljYm5meWhxZWxqbWFzdXBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyODAxNzcsImV4cCI6MjA3MTg1NjE3N30.lXwolhDfF0uanOWsBg-Ai98AJvtjP933NtSSZUSLb_w";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
