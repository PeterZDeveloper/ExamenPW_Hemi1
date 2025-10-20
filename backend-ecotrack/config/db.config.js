const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Bloque de diagnóstico de conexión para evitar timeouts silenciosos
pool.connect((err, client, release) => {
    if (err) {
        console.error("❌ ERROR FATAL: No se pudo conectar a PostgreSQL.", err.message);
    } else {
        console.log("✅ Conexión exitosa a PostgreSQL.");
        release();
    }
});

module.exports = {
    query: (text, params) => pool.query(text, params)
};