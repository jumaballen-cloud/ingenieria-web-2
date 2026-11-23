import { Link } from "react-router-dom";
export const precio = valor => new Intl.NumberFormat("es-CO", {style:"currency", currency:"USD", currencyDisplay:"code"}).format(valor);
export default function ProductoCard({producto, detalle, registrar}) {
  return <article className="card producto"><img src={producto.thumbnail} alt={producto.title}/>
    <div className="card-body"><h2>{producto.title}</h2><p>{producto.description}</p><strong>{precio(producto.price)}</strong>
    <div className="mt-3">{detalle ? <button className="btn btn-accent" onClick={()=>registrar(producto)}>Registrar pedido</button> :
      <Link className="btn btn-outline-dark" to={'/productos/'+producto.id}>Ver detalle</Link>}</div></div></article>;
}
