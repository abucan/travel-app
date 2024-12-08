import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wecmveksbwuzmejouepw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndlY212ZWtzYnd1em1lam91ZXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM2NjU2MjEsImV4cCI6MjA0OTI0MTYyMX0.ZEsIEZZCRhJ-Hx66b3e2FgXerm32RzchpkoD_KgyXQU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})