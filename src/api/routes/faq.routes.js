const express = require('express');
const router = express.Router();

const pool = require('../../config/database');

// Listar FAQ
router.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query(
            "SELECT * FROM faq ORDER BY id DESC"
        );

        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener FAQ' });
    }
});

// Crear FAQ
router.post('/', async (req, res) => {
    try {
        const { pregunta, respuesta, categoria } = req.body;

        await pool.query(
            "INSERT INTO faq (pregunta, respuesta, categoria) VALUES (?, ?, ?)",
            [pregunta, respuesta, categoria]
        );

        res.json({ message: 'FAQ creada correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear FAQ' });
    }
});

// Editar FAQ
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { pregunta, respuesta, categoria, estado } = req.body;

        await pool.query(
            "UPDATE faq SET pregunta = ?, respuesta = ?, categoria = ?, estado = ? WHERE id = ?",
            [pregunta, respuesta, categoria, estado, id]
        );

        res.json({ message: 'FAQ actualizada correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar FAQ' });
    }
});

// Eliminar FAQ
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        await pool.query(
            "DELETE FROM faq WHERE id = ?",
            [id]
        );

        res.json({ message: 'FAQ eliminada correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar FAQ' });
    }
});

module.exports = router;