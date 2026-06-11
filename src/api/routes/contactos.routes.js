const express = require('express');
const router = express.Router();

const pool = require('../../config/database');

// Listar contactos
router.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query(
            "SELECT * FROM contactos ORDER BY id DESC"
        );

        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener contactos' });
    }
});

// Crear contacto
router.post('/', async (req, res) => {
    try {
        const {
            departamento,
            responsable,
            telefono,
            correo,
            horario_atencion
        } = req.body;

        await pool.query(
            `INSERT INTO contactos 
            (departamento, responsable, telefono, correo, horario_atencion)
            VALUES (?, ?, ?, ?, ?)`,
            [departamento, responsable, telefono, correo, horario_atencion]
        );

        res.json({ message: 'Contacto creado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear contacto' });
    }
});

// Editar contacto
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const {
            departamento,
            responsable,
            telefono,
            correo,
            horario_atencion,
            estado
        } = req.body;

        await pool.query(
            `UPDATE contactos 
            SET departamento = ?, responsable = ?, telefono = ?, correo = ?, horario_atencion = ?, estado = ?
            WHERE id = ?`,
            [departamento, responsable, telefono, correo, horario_atencion, estado, id]
        );

        res.json({ message: 'Contacto actualizado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar contacto' });
    }
});

// Eliminar contacto
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        await pool.query(
            "DELETE FROM contactos WHERE id = ?",
            [id]
        );

        res.json({ message: 'Contacto eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar contacto' });
    }
});

module.exports = router;