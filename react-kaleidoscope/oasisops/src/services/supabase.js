import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ixzozfgdsvqaufuxjuyo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4em96Zmdkc3ZxYXVmdXhqdXlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkwNDY5OTUsImV4cCI6MjAyNDYyMjk5NX0._CUutu2kbmBq1H60qAggyDpD3M0j6UCHbI4lYSNFh0A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
