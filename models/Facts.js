const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Facts extends Model {}


Facts.init(
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

module.exports = Facts;
