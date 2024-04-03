// Importa la función createClient de supabase-js
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ijflbhnnkysiabzsrlvy.supabase.co/";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqZmxiaG5ua3lzaWFienNybHZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE5MDE0OTQsImV4cCI6MjAyNzQ3NzQ5NH0.sMqgsPT-mJXcMhAa4FZt1T8jQRFiKDt7JvoF3R2ujPU";

// Crea y exporta el cliente de Supabase
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
