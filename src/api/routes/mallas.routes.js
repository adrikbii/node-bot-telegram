const express = require('express');
const router = express.Router();

const pool = require('../../config/database');

// Listar materias con carrera y ciclo
router.get('/materias', async (req, res) => {
    try {
        const [rows] = await pool.query(`
      SELECT 
        m.id,
        m.nombre,
        m.estado,
        m.carrera_id,
        m.ciclo_id,
        c.nombre AS carrera,
        ci.nombre AS ciclo
      FROM materias m
      INNER JOIN carreras c ON m.carrera_id = c.id
      INNER JOIN ciclos ci ON m.ciclo_id = ci.id
      ORDER BY c.nombre ASC, ci.id ASC, m.id ASC
    `);

        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener materias' });
    }
});

// Crear materia
router.post('/materias', async (req, res) => {
    try {
        const { carrera_id, ciclo_id, nombre } = req.body;

        await pool.query(
            `INSERT INTO materias (carrera_id, ciclo_id, nombre)
       VALUES (?, ?, ?)`,
            [carrera_id, ciclo_id, nombre]
        );

        res.json({ message: 'Materia creada correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear materia' });
    }
});

// Editar materia
router.put('/materias/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { carrera_id, ciclo_id, nombre, estado } = req.body;

        await pool.query(
            `UPDATE materias
       SET carrera_id = ?, ciclo_id = ?, nombre = ?, estado = ?
       WHERE id = ?`,
            [carrera_id, ciclo_id, nombre, estado, id]
        );

        res.json({ message: 'Materia actualizada correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar materia' });
    }
});

// Eliminar materia
router.delete('/materias/:id', async (req, res) => {
    try {
        const { id } = req.params;

        await pool.query(
            'DELETE FROM materias WHERE id = ?',
            [id]
        );

        res.json({ message: 'Materia eliminada correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar materia' });
    }
});

module.exports = router;