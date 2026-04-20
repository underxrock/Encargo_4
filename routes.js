const express = require('express');
const router = express.Router();
let productos = require('./data');

// GET: Listar productos [cite: 1511]
router.get('/productos', (req, res) => {
    res.status(200).json(productos); // Respuesta exitosa 200 [cite: 1542]
});

// POST: Agregar nuevo producto [cite: 1511]
router.post('/productos', (req, res) => {
    const { nombre, precio, categoria } = req.body;

    // Validación: nombre y precio deben existir [cite: 1531]
    if (!nombre || precio === undefined) {
        return res.status(400).json({ mensaje: "Nombre y precio son obligatorios" }); // Error 400 [cite: 1540]
    }
    // Validación: precio debe ser número [cite: 1532]
    if (typeof precio !== 'number') {
        return res.status(400).json({ mensaje: "El precio debe ser un número" });
    }

    const nuevoProducto = {
        id: productos.length + 1, // ID automático [cite: 1514]
        nombre,
        precio,
        categoria
    };
    productos.push(nuevoProducto);
    res.status(201).json(nuevoProducto); // Creado 201 [cite: 1542]
});

// PUT: Actualizar producto [cite: 1511]
router.put('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = productos.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ mensaje: "Producto no encontrado" }); // Error 404 [cite: 1538]
    }

    productos[index] = { ...productos[index], ...req.body };
    res.status(200).json(productos[index]);
});

// DELETE: Eliminar producto [cite: 1511, 1568]
router.delete('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = productos.findIndex(p => p.id === id);

    if (index !== -1) {
        productos.splice(index, 1);
        return res.status(200).json({ mensaje: "Producto eliminado" });
    }
    res.status(404).json({ mensaje: "ID no encontrado" });
});

module.exports = router;