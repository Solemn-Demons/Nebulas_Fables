const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Constellation extends Model {}


Constellation.init(
    {
   
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'mythos',
      }
);

module.exports = Constellation;
