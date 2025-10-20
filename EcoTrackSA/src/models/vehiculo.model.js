const db = require('../config/db');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Vehiculo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    marca: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    anio: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(20),
      allowNull: true,
      validate: {
        isIn: [['activo', 'inactivo']] // Ajusta según tu restricción CHECK
      }
    }
  }, {
    tableName: 'vehiculos',
    timestamps: false
  });
};