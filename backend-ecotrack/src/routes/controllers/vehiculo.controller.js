const VehiculoModel = require('../models/vehiculo.model');

// Maneja GET /vehiculos
exports.findAll = async(req, res) => {
    try {
        const result = await VehiculoModel.findAll();
        res.status(200).json(result.rows);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

// Maneja POST /vehiculos
exports.create = async(req, res) => {
    try {
        const result = await VehiculoModel.create(req.body);
        res.status(201).json(result.rows[0]);
    } catch (e) {
        // Captura errores como 'NOT NULL constraint failed' o de estado [cite: 93]
        res.status(500).json({ error: e.message });
    }
};

// Maneja PUT /vehiculos/:id
exports.update = async(req, res) => {
    try {
        const result = await VehiculoModel.update(req.params.id, req.body);
        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Vehículo no encontrado' });
        }
        res.status(200).json(result.rows[0]);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

// Maneja DELETE /vehiculos/:id
exports.remove = async(req, res) => {
    try {
        const result = await VehiculoModel.remove(req.params.id);
        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Vehículo no encontrado' });
        }
        res.status(204).send(); // 204 No Content para borrado exitoso
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};