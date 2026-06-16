const express = require('express');
const router = express.Router();

const pool = require('../../config/database');

router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT id, nombre FROM usuarios WHERE rol = 'DOCENTE' AND estado = 'ACTIVO' ORDER BY nombre ASC"
    );

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener docentes' });
  }
});

module.exports = router;