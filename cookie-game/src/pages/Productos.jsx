import {useState, useEffect} from "react";
import {Link, useParams, useOutletContext} from "react-router-dom";
import {consultarProductos} from "../services/productos";
import ProductoCard from "../components/ProductoCard";
export default function Productos() {
  const {registrar} = useOutletContext();
  const {id} = useParams();
  const [productos, cargar] = useState(null);
  const [error, fallo] = useState("");
  const [mensaje, avisar] = useState("");
  const [intento, reintentar] = useState(0);
  useEffect(()=>{
    const control = new AbortController();
    cargar(null); fallo(""); avisar("");
    consultarProductos(id, control.signal).then(datos=>{if(!control.signal.aborted) cargar(datos);})
      .catch(e=>{if(!control.signal.aborted) fallo(e.message === "El producto solicitado no existe." ? e.message : "No se pudo consultar DummyJSON. Revisa tu conexión.");});
    return ()=>control.abort();
  }, [id, intento]);
  return <><p className="eyebrow">SHOPPANEL</p><h1>{id ? "Detalle del videojuego" : "Videojuegos disponibles"}</h1>
    {id && <Link to="/productos">← Volver a videojuegos</Link>}
    {error ? <p role="alert">{error} <button onClick={()=>reintentar(intento+1)}>Reintentar</button></p> : !productos ? <p role="status">Cargando productos…</p> :
    <div className={id ? "detalle-producto" : "rejilla"}>{productos.map(p=><ProductoCard key={p.id} producto={p} detalle={Boolean(id)} registrar={p=>avisar(registrar(p))}/>)}</div>}
    {mensaje && <p role="status">{mensaje} <Link to="/pedidos">Ver mis pedidos</Link></p>}</>;
}
