const express = require('express');
const router = express.Router();

const pool = require('../../config/database');

// Listar anuncios
router.get('/', async (req, res) => {
  try {

    const [rows] = await pool.query(
      "SELECT * FROM anuncios ORDER BY created_at DESC"
    );

    res.json(rows);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error al obtener anuncios'
    });
  }
});

// Crear anuncio
router.post('/', async (req, res) => {
  try {

    const { titulo, contenido } = req.body;

    await pool.query(
      `
      INSERT INTO anuncios
      (titulo, contenido)
      VALUES (?, ?)
      `,
      [titulo, contenido]
    );

    res.json({
      message: 'Anuncio creado correctamente'
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error al crear anuncio'
    });
  }
});

// Actualizar anuncio
router.put('/:id', async (req, res) => {
  try {

    const { id } = req.params;
    const { titulo, contenido, estado } = req.body;

    await pool.query(
      `
      UPDATE anuncios
      SET titulo = ?, contenido = ?, estado = ?
      WHERE id = ?
      `,
      [titulo, contenido, estado, id]
    );

    res.json({
      message: 'Anuncio actualizado correctamente'
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error al actualizar anuncio'
    });
  }
});

// Eliminar anuncio
router.delete('/:id', async (req, res) => {
  try {

    const { id } = req.params;

    await pool.query(
      "DELETE FROM anuncios WHERE id = ?",
      [id]
    );

    res.json({
      message: 'Anuncio eliminado correctamente'
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error al eliminar anuncio'
    });
  }
});

module.exports = router;