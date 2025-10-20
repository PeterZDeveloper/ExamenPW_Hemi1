const db = require('../../../config/db.config');

// 1. GET (Read all)
exports.findAll = () => {
    return db.query('SELECT * FROM vehiculos ORDER BY id ASC');
};

// 2. POST (Create)
exports.create = (data) => {
    return db.query(
        'INSERT INTO vehiculos (nombre, marca, anio, estado) VALUES ($1, $2, $3, $4) RETURNING *', [data.nombre, data.marca, data.anio, data.estado]
    );
};

// 3. PUT (Update)
exports.update = (id, data) => {
    return db.query(
        'UPDATE vehiculos SET nombre = $1, marca = $2, anio = $3, estado = $4 WHERE id = $5 RETURNING *', [data.nombre, data.marca, data.anio, data.estado, id]
    );
};

// 4. DELETE (Delete)
exports.remove = (id) => {
    return db.query('DELETE FROM vehiculos WHERE id = $1 RETURNING id', [id]);
};