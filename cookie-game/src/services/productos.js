import endpoints from "../data/endpoints.json";
import { juegos } from "../data/juegos";

// Las portadas se empaquetan con Vite y la API identifica cada una por su clave.
const portadas = new Map(juegos.map(juego => [juego.id, juego.imagen]));
export async function consultarProductos(id, signal) {
  const url = id ? endpoints.detalle[id] : endpoints.catalogo;
  if (typeof url !== "string") throw new Error("El producto solicitado no existe.");
  const respuesta = await fetch(url, {signal});
  if (!respuesta.ok) throw new Error("No se pudo consultar DummyJSON.");
  const datos = await respuesta.json();
  const registros = id ? [datos] : datos.products;
  return registros.map(producto => ({...producto, thumbnail: portadas.get(producto.thumbnail)}));
}
