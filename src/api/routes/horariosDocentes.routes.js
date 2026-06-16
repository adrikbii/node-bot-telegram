const express = require('express');
const router = express.Router();

const pool = require('../../config/database');

// Listar horarios docentes
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT 
        hd.id,
        hd.usuario_id,
        u.nombre AS docente,
        hd.titulo,
        hd.url_imagen,
        hd.estado,
        hd.created_at
      FROM horarios_docentes hd
      INNER JOIN usuarios u ON hd.usuario_id = u.id
      WHERE u.rol = 'DOCENTE'
      ORDER BY hd.id DESC
    `);

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener horarios docentes' });
  }
});

// Crear horario docente
router.post('/', async (req, res) => {
  try {
    const { usuario_id, titulo, url_imagen } = req.body;

    await pool.query(
      `INSERT INTO horarios_docentes (usuario_id, titulo, url_imagen)
       VALUES (?, ?, ?)`,
      [usuario_id, titulo, url_imagen]
    );

    res.json({ message: 'Horario docente creado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear horario docente' });
  }
});

// Editar horario docente
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { usuario_id, titulo, url_imagen, estado } = req.body;

    await pool.query(
      `UPDATE horarios_docentes
       SET usuario_id = ?, titulo = ?, url_imagen = ?, estado = ?
       WHERE id = ?`,
      [usuario_id, titulo, url_imagen, estado, id]
    );

    res.json({ message: 'Horario docente actualizado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar horario docente' });
  }
});

// Eliminar horario docente
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(
      'DELETE FROM horarios_docentes WHERE id = ?',
      [id]
    );

    res.json({ message: 'Horario docente eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar horario docente' });
  }
});

module.exports = router;