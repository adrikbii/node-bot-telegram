const express = require('express');
const router = express.Router();

const pool = require('../../config/database');

// Listar información institucional
router.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query(
            "SELECT * FROM informacion_institucional ORDER BY id DESC"
        );

        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener información institucional' });
    }
});

// Crear información institucional
router.post('/', async (req, res) => {
    try {
        const { titulo, contenido } = req.body;

        await pool.query(
            "INSERT INTO informacion_institucional (titulo, contenido) VALUES (?, ?)",
            [titulo, contenido]
        );

        res.json({ message: 'Información creada correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear información institucional' });
    }
});

// Editar información institucional
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, contenido, estado } = req.body;

        await pool.query(
            "UPDATE informacion_institucional SET titulo = ?, contenido = ?, estado = ? WHERE id = ?",
            [titulo, contenido, estado, id]
        );

        res.json({ message: 'Información actualizada correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar información institucional' });
    }
});

// Eliminar información institucional
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        await pool.query(
            "DELETE FROM informacion_institucional WHERE id = ?",
            [id]
        );

        res.json({ message: 'Información eliminada correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar información institucional' });
    }
});

module.exports = router;