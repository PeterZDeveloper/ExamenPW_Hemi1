const express = require('express');
const router = express.Router();
const ctrl = require('./routes/controllers/vehiculo.controller');

router.get('/', ctrl.findAll);
router.post('/', ctrl.create);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.remove);

module.exports = router;