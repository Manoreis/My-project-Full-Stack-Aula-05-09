const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Fruit = sequelize.define('Fruit', {
  name: { type: DataTypes.STRING, allowNull: false },
  weight: { type: DataTypes.FLOAT, allowNull: false },
  value: { type: DataTypes.FLOAT, allowNull: false },
});

module.exports = Fruit;
