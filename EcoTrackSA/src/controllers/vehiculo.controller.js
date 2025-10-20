// In-memory controller for development/testing (no DB required)
let vehiculos = [
  { id: 1, nombre: 'Vehículo 1', marca: 'Marca A', anio: 2020, estado: 'activo' },
  { id: 2, nombre: 'Vehículo 2', marca: 'Marca B', anio: 2018, estado: 'inactivo' }
];

let nextId = 3;

exports.getVehiculos = (req, res) => {
  res.json(vehiculos);
};

exports.createVehiculo = (req, res) => {
  const payload = req.body;
  const nuevo = { id: nextId++, ...payload };
  vehiculos.push(nuevo);
  res.status(201).json(nuevo);
};

exports.updateVehiculo = (req, res) => {
  const { id } = req.params;
  const idx = vehiculos.findIndex(v => String(v.id) === String(id));
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  vehiculos[idx] = { ...vehiculos[idx], ...req.body };
  res.json(vehiculos[idx]);
};

exports.deleteVehiculo = (req, res) => {
  const { id } = req.params;
  const idx = vehiculos.findIndex(v => String(v.id) === String(id));
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  vehiculos.splice(idx, 1);
  res.status(204).send();
};