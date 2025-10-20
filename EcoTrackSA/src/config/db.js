import pkg from 'pg';
const { Pool } = pkg;

// Configuración del pool de conexiones a la base de datos
const pool = new Pool({
  user: 'postgres',         // Reemplaza con tu usuario de PostgreSQL
  host: 'localhost',          // Puede ser IP o dominio si es remoto
  database: 'db_eco',         // Nombre de tu base de datos
  password: 'UTM123',  // Contraseña de tu usuario
  port: 5432,                 // Puerto por defecto de PostgreSQL
});

// Función para consultar la base de datos, útil para reutilizar
const query = (text, params) => {
  return pool.query(text, params);
};

export { pool, query };
