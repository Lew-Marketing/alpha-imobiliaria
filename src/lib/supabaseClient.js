import { createClient } from "@supabase/supabase-js";

// Verificar se as variáveis de ambiente estão definidas
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Flag para indicar se o Supabase está configurado
export const isSupabaseConfigured = !!(supabaseUrl && supabaseKey);

// Criar cliente Supabase apenas se as credenciais estiverem disponíveis
export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabaseKey)
  : null;

// Função para verificar conexão
export const checkConnection = async () => {
  // Se o Supabase não estiver configurado, retornar false imediatamente
  if (!isSupabaseConfigured || !supabase) {
    console.warn('Supabase not configured - using mock data');
    return false;
  }

  try {
    // Timeout para evitar travamento
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Connection timeout')), 5000)
    );
    
    const connectionPromise = supabase.from('properties').select('count').limit(1);
    
    const { error } = await Promise.race([connectionPromise, timeoutPromise]);
    
    if (error) {
      console.warn('Supabase connection failed:', error.message);
      return false;
    }
    
    console.log('Supabase connected successfully');
    return true;
  } catch (error) {
    console.warn('Supabase connection failed:', error.message);
    return false;
  }