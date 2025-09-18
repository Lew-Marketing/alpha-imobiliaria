import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Fallback para desenvolvimento local
const defaultUrl = "https://ijmupkeqsqxrtbdidovc.supabase.co";
const defaultKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqbXVwa2Vxc3F4cnRiZGlkb3ZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ1NTI2NzEsImV4cCI6MjA1MDEyODY3MX0.123456789";

export const supabase = createClient(
  supabaseUrl || defaultUrl,
  supabaseKey || defaultKey
);

// Função para verificar conexão
export const checkConnection = async () => {
  try {
    const { data, error } = await supabase.from('properties').select('count').limit(1);
    return !error;
  } catch (error) {
    console.warn('Supabase connection failed:', error);
    return false;
  }
};