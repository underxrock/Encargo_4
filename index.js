const express = require('express');
const app = express();
const rutasProductos = require('./routes');

// Middleware para procesar JSON (Requisito 5)
app.use(express.json());

// Uso de rutas con prefijo /api (Requisito 2)
app.use('/api', rutasProductos);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor de Productos corriendo en http://localhost:${PORT}`);
});