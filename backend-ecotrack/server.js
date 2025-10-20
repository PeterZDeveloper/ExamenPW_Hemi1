const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Ruta base para toda la API de vehículos [cite: 66, 67]
app.use('/vehiculos', require('./src/routes/vehiculo.routes'));

app.listen(PORT, () => {
    console.log(`Backend EcoTrack corriendo en http://localhost:${PORT}`);
    console.log(`API Base: http://localhost:${PORT}/vehiculos`);
});