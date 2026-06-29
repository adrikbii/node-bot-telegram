const express = require('express');
const router = express.Router();

const pool = require('../../config/database');

router.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query(
            "SELECT id, nombre FROM ciclos ORDER BY id ASC"
        );

        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener ciclos' });
    }
});

module.exports = router;