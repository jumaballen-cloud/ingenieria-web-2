import { createContext, useContext, useState, useEffect } from "react";
import { auth, entrar, salir } from "../services/auth";
const Contexto = createContext(null);
export const useSesion = () => useContext(Contexto);

export function Sesion({children}) {
  const [sesion, actualizar] = useState(null);
  const [cargando, esperar] = useState(Boolean(auth));
  useEffect(() => {
    if (!auth) return;
    const {data} = auth.onAuthStateChange((evento, actual) => {
      actualizar(actual);
      esperar(false);
    });
    return () => data.subscription.unsubscribe();
  }, []);
  return <Contexto.Provider value={{sesion, usuario: sesion?.user, cargando, entrar, salir, configurado: Boolean(auth)}}>{children}</Contexto.Provider>;
}
