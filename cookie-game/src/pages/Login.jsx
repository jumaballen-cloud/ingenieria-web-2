import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useSesion } from "../context/Sesion";
export default function Login() {
  const {usuario, cargando, configurado, entrar} = useSesion();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [ocupado, setOcupado] = useState(false);
  async function enviar(evento) {
    evento.preventDefault();
    if (!email.trim() || !password) return setError("Completa el correo y la contraseña.");
    setOcupado(true);
    setError("");
    try {
      const {error} = await entrar(email.trim(), password);
      if (error) setError(error.code === "invalid_credentials" ? "Correo o contraseña incorrectos." : "No se pudo iniciar sesión. Verifica tu cuenta y conexión.");
    } catch { setError("Revisa tu conexión e intenta de nuevo."); }
    finally { setOcupado(false); }
  }
  if (usuario) return <Navigate to="/productos" replace/>;
  return <section className="acceso"><p className="eyebrow">SHOPPANEL</p><h1>Iniciar sesión</h1>
    <p>Ingresa para consultar videojuegos y gestionar tus pedidos.</p>
    <form onSubmit={enviar}><label>Correo electrónico<input className="form-control" type="email" autoComplete="username" value={email} onChange={e=>setEmail(e.target.value)}/></label>
    <label>Contraseña<input className="form-control" type="password" autoComplete="current-password" value={password} onChange={e=>setPassword(e.target.value)}/></label>
    {error && <p role="alert">{error}</p>}{!configurado && <p role="alert">Configura las variables de Supabase en .env.local.</p>}
    <button className="btn btn-accent" disabled={ocupado || cargando || !configurado}>{ocupado ? "Ingresando…" : "Ingresar"}</button></form></section>;
}
