import {Link,useOutletContext} from "react-router-dom";
import {estados} from "./Panel";
import {precio} from "../components/ProductoCard";
export default function Pedidos() {
  const {pedidos,cambiar}=useOutletContext();
  return <><p className="eyebrow">SHOPPANEL</p><h1>Mis pedidos</h1>
    {pedidos.length===0 && <p>Aún no tienes pedidos. <Link to="/productos">Explorar productos</Link></p>}
    {pedidos.map(p=><article className="pedido" key={p.id}><img src={p.imagen} alt={p.nombre}/><div><h2>{p.nombre}</h2><p>{precio(p.precio)}</p>
    <label>Estado del pedido<select className="form-select" value={p.estado} onChange={e=>cambiar(p.id,e.target.value)}>{estados.map(s=><option key={s}>{s}</option>)}</select></label></div></article>)}</>;
}
