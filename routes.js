const express = require('express');
const router = express.Router();
let productos = require('./data');

// GET: Listar productos (Requisito 3)
router.get('/productos', (req, res) => {
    res.status(200).json(productos);
});

// POST: Crear producto (Requisito 6 - Validación básica)
router.post('/productos', (req, res) => {
    const { nombre, precio, categoria } = req.body;

    // Validación: campos obligatorios y tipo de dato (Requisito 6)
    if (!nombre || precio === undefined) {
        return res.status(400).json({ error: "nombre y precio son obligatorios" });
    }
    if (typeof precio !== 'number') {
        return res.status(400).json({ error: "precio debe ser un número" });
    }

    const nuevoProducto = {
        id: productos.length + 1, // ID automático
        nombre,
        precio,
        categoria: categoria || "General"
    };

    productos.push(nuevoProducto);
    res.status(201).json(nuevoProducto);
});

// PUT: Actualizar producto (Requisito 7 - Manejo de errores)
router.put('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = productos.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Producto no encontrado" });
    }

    // Validación básica para actualizar
    if (req.body.precio && typeof req.body.precio !== 'number') {
        return res.status(400).json({ error: "precio debe ser un número" });
    }

    productos[index] = { ...productos[index], ...req.body };
    res.status(200).json(productos[index]);
});

// DELETE: Eliminar producto.
router.delete('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = productos.findIndex(p => p.id === id);

    if (index !== -1) {
        productos.splice(index, 1);
        return res.status(200).json({ mensaje: "Producto eliminado exitosamente" });
    }
    res.status(404).json({ error: "ID no encontrado" });
});

module.exports = router;