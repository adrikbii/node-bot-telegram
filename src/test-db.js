require('dotenv').config();

const pool = require('./config/database');

async function testConnection() {
    try {
        const [rows] = await pool.query('SHOW TABLES');

        console.log('✅ Conexión exitosa');

        console.table(rows);

        process.exit();
    } catch (error) {
        console.error('❌ Error');
        console.error(error);

        process.exit(1);
    }
}

testConnection();