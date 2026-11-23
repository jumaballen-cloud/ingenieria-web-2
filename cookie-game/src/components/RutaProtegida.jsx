import { Navigate, Outlet } from "react-router-dom";
import { useSesion } from "../context/Sesion";
export default function RutaProtegida() {
  const {usuario, cargando} = useSesion();
  if (cargando) return <p role="status">Consultando sesión…</p>;
  return usuario ? <Outlet/> : <Navigate to="/login" replace/>;
}
