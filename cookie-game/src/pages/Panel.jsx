import {useState} from "react";
import {Outlet, NavLink, useNavigate} from "react-router-dom";
import {useSesion} from "../context/Sesion";
export const estados = ["Pendiente","Confirmado","Enviado","Cancelado"];
export default function Panel() {
  const {usuario, salir} = useSesion();
  const navegar = useNavigate();
  const clave = "shoppanel.pedidos."+usuario.id;
  const [pedidos, actualizar] = useState(()=>{
    try {const lista=JSON.parse(localStorage.getItem(clave)); return Array.isArray(lista) ? lista : [];} catch {return [];}
  });
  const [error, fallo] = useState("");
  function guardar(lista) {
    try {localStorage.setItem(clave, JSON.stringify(lista)); actualizar(lista); fallo(""); return true;}
    catch {fallo("El navegador no permitió guardar el cambio."); return false;}
  }
  function registrar(p) {
    const pedido = {id:crypto.randomUUID(),productoId:p.id,nombre:p.title,imagen:p.thumbnail,precio:p.price,estado:"Pendiente"};
    return guardar([...pedidos,pedido]) ? "Pedido registrado como pendiente." : "Pedido sin guardar.";
  }
  function cambiar(id, estado) {
    guardar(pedidos.map(p=>p.id===id ? {...p, estado} : p));
  }
  async function desconectar() {
    try {const {error}=await salir(); if(error) throw error; navegar("/login",{replace:true});}
    catch {fallo("No se pudo cerrar la sesión. Intenta de nuevo.");}
  }
  return <section className="container section-space"><nav className="barra-panel"><NavLink to="/productos">Videojuegos</NavLink><NavLink to="/pedidos">Mis pedidos ({pedidos.length})</NavLink>
    <span>{usuario.email}</span><button className="btn btn-outline-dark btn-sm" onClick={desconectar}>Cerrar sesión</button></nav>
    {error && <p role="alert">{error}</p>}<Outlet context={{pedidos,registrar,cambiar}}/></section>;
}
