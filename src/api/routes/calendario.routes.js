const express = require('express');
const router = express.Router();

const pool = require('../../config/database');

// Listar calendario académico
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM calendario_academico ORDER BY id DESC"
    );

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener calendario académico' });
  }
});

// Crear calendario académico
router.post('/', async (req, res) => {
  try {
    const { titulo, url_archivo } = req.body;

    await pool.query(
      "INSERT INTO calendario_academico (titulo, url_archivo) VALUES (?, ?)",
      [titulo, url_archivo]
    );

    res.json({ message: 'Calendario creado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear calendario académico' });
  }
});

// Editar calendario académico
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, url_archivo, estado } = req.body;

    await pool.query(
      "UPDATE calendario_academico SET titulo = ?, url_archivo = ?, estado = ? WHERE id = ?",
      [titulo, url_archivo, estado, id]
    );

    res.json({ message: 'Calendario actualizado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar calendario académico' });
  }
});

// Eliminar calendario académico
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(
      "DELETE FROM calendario_academico WHERE id = ?",
      [id]
    );

    res.json({ message: 'Calendario eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar calendario académico' });
  }
});

module.exports = router;