import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vcoskeyuqbuunalodiji.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjb3NrZXl1cWJ1dW5hbG9kaWppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEyNzMyOTYsImV4cCI6MjAyNjg0OTI5Nn0.pQbm1pQux9paMGuhcWamkW3wLrunDfCQjzzkCV5D5rQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
