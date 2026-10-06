// Configurações do Supabase
const SUPABASE_URL = "https://lmxzwwplykcypkzqnjca.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxteHp3d3BseWtjeXBrenFuamNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA4NzU5NTEsImV4cCI6MjEwNjQ1MTk1MX0.SBCaSwY7CngnvkYAIwiupabZyxrWFjaOygoorpdCjuI";

// Inicializa o cliente Supabase
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
