import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
export const auth = url && key ? createClient(url, key).auth : null;
export const entrar = (email, password) => auth.signInWithPassword({email, password});
export const salir = () => auth.signOut();
