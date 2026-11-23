# Cookie Game · ShopPanel
Desde esta carpeta instala las dependencias con Node.js 22.12 o superior y npm ci. El ZIP incluye .env.local para ejecutar la entrega. Para configurar otra copia, utiliza .env.example y completa VITE_SUPABASE_URL y VITE_SUPABASE_PUBLISHABLE_KEY con la URL y la clave publicable de tu proyecto Supabase. Ejecuta npm run dev y abre la dirección indicada. Para generar la distribución ejecuta npm run build.

En la barra principal, ShopPanel abre el acceso a los productos y pedidos. Usa una cuenta de correo confirmada del proyecto Supabase. Los pedidos se conservan en el navegador por usuario.

## Catálogo de videojuegos y pruebas de API
El panel consulta por GET siete respuestas personalizadas de DummyJSON. Una contiene los seis videojuegos y cada una de las seis restantes contiene una ficha. Los precios se usan para simular pedidos. El campo thumbnail identifica una portada local de src/assets.

En Postman elige Import, abre evidencias/ShopPanel.postman_collection.json y ejecuta Run collection. Las siete consultas son públicas. Resultados_Newman.txt conserva la ejecución de referencia. DummyJSON indica una vigencia de 90 días para sus respuestas personalizadas. Para renovar las direcciones, ejecuta node scripts/renovar-catalogo.mjs desde esta carpeta con conexión a internet y vuelve a importar la colección. Documentación: https://dummyjson.com/docs/tools
