const service = require('../services/vehiculo.service');

// GET: Obtener todos los vehículos
exports.getVehiculos = async (req, res) => {
    try {
        const data = await service.getVehiculos();
        res.json(data);
        console.log('getVehiculos controller');
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error);
    }
};

// POST: Crear un nuevo vehículo
exports.createVehiculo = async (req, res) => {
    try {
        const newVehiculo = await service.createVehiculo(req.body);
        res.status(201).json(newVehiculo);
        console.log('createVehiculo controller');
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error);
    }
};

// PUT: Actualizar un vehículo existente
exports.updateVehiculo = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedVehiculo = await service.updateVehiculo(id, req.body);
        res.json(updatedVehiculo);
        console.log('updateVehiculo controller');
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error);
    }
};

// DELETE: Eliminar un vehículo
exports.deleteVehiculo = async (req, res) => {
    try {
        const { id } = req.params;
        await service.deleteVehiculo(id);
        res.status(204).send(); // Sin contenido
        console.log('deleteVehiculo controller');
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error);
    }
};