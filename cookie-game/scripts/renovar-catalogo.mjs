// Ejecutar desde la raíz del proyecto cuando caduquen las respuestas personalizadas.
import {readFile, writeFile} from "node:fs/promises";
const productos = JSON.parse(await readFile("scripts/catalogo.json","utf8"));
const archivoColeccion = "evidencias/ShopPanel.postman_collection.json";
const coleccion = JSON.parse(await readFile(archivoColeccion,"utf8"));
async function publicar(json) {
  const respuesta = await fetch("https://dummyjson.com/c/generate", {
    method: "POST", headers: {"Content-Type":"application/json"},
    body: JSON.stringify({method:"GET",json})
  });
  if (!respuesta.ok) throw new Error("DummyJSON respondió "+respuesta.status);
  const {url} = await respuesta.json();
  if (!url?.startsWith("https://dummyjson.com/c/")) throw new Error("URL inesperada");
  return url;
}
const catalogo = await publicar({products:productos,total:productos.length});
const detalle = {};
for (const producto of productos) detalle[producto.id] = await publicar(producto);
for (const item of coleccion.item) {
  const id = item.name.split(" · ")[1];
  item.request.url = id ? detalle[id] : catalogo;
}
await writeFile("src/data/endpoints.json",JSON.stringify({catalogo,detalle},null,2));
await writeFile(archivoColeccion,JSON.stringify(coleccion,null,2));
