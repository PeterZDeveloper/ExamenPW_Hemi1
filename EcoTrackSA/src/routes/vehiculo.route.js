const express = require('express');
const router = express.Router();
const controller = require('../controllers/vehiculo.controller');

// GET: Obtener todos los vehículos
router.get('/', controller.getVehiculos);

// POST: Crear un nuevo vehículo
router.post('/', controller.createVehiculo);

// PUT: Actualizar un vehículo por ID
router.put('/:id', controller.updateVehiculo);

// DELETE: Eliminar un vehículo por ID
router.delete('/:id', controller.deleteVehiculo);

module.exports = router;