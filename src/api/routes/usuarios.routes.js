const express = require('express');
const router = express.Router();

const pool = require('../../config/database');

// Listar usuarios
router.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query(`
      SELECT 
        u.id,
        u.cedula,
        u.nombre,
        u.password,
        u.rol,
        u.estado,
        u.carrera_id,
        c.nombre AS carrera
      FROM usuarios u
      LEFT JOIN carreras c ON u.carrera_id = c.id
      ORDER BY u.id DESC
    `);

        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener usuarios' });
    }
});

// Crear usuario
router.post('/', async (req, res) => {
    try {
        const { cedula, nombre, password, rol, carrera_id } = req.body;

        await pool.query(
            `INSERT INTO usuarios 
      (cedula, nombre, password, rol, carrera_id, estado)
      VALUES (?, ?, ?, ?, ?, 'ACTIVO')`,
            [cedula, nombre, password, rol, carrera_id || null]
        );

        res.json({ message: 'Usuario creado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear usuario' });
    }
});

// Editar usuario
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { cedula, nombre, password, rol, carrera_id, estado } = req.body;

        await pool.query(
            `UPDATE usuarios
       SET cedula = ?, nombre = ?, password = ?, rol = ?, carrera_id = ?, estado = ?
       WHERE id = ?`,
            [cedula, nombre, password, rol, carrera_id || null, estado, id]
        );

        res.json({ message: 'Usuario actualizado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar usuario' });
    }
});

// Eliminar usuario
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        await pool.query(
            'DELETE FROM usuarios WHERE id = ?',
            [id]
        );

        res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar usuario' });
    }
});

module.exports = router;