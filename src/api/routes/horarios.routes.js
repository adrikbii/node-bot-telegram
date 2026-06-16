const express = require('express');
const router = express.Router();

const pool = require('../../config/database');

// Listar horarios
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT 
        h.id,
        h.carrera_id,
        c.nombre AS carrera,
        h.titulo,
        h.url_imagen,
        h.estado,
        h.created_at
      FROM horarios_imagenes h
      INNER JOIN carreras c ON h.carrera_id = c.id
      ORDER BY h.id DESC
    `);

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener horarios' });
  }
});

// Crear horario
router.post('/', async (req, res) => {
  try {
    const { carrera_id, titulo, url_imagen } = req.body;

    await pool.query(
      `INSERT INTO horarios_imagenes (carrera_id, titulo, url_imagen)
       VALUES (?, ?, ?)`,
      [carrera_id, titulo, url_imagen]
    );

    res.json({ message: 'Horario creado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear horario' });
  }
});

// Editar horario
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { carrera_id, titulo, url_imagen, estado } = req.body;

    await pool.query(
      `UPDATE horarios_imagenes
       SET carrera_id = ?, titulo = ?, url_imagen = ?, estado = ?
       WHERE id = ?`,
      [carrera_id, titulo, url_imagen, estado, id]
    );

    res.json({ message: 'Horario actualizado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar horario' });
  }
});

// Eliminar horario
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(
      'DELETE FROM horarios_imagenes WHERE id = ?',
      [id]
    );

    res.json({ message: 'Horario eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar horario' });
  }
});

module.exports = router;