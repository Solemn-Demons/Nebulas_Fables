const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Star extends Model {}

///constellations:  id constellation_name //stars id str name refernec constellation id //information 

Star.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        constellation_name: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'starchart',
      }
);

module.exports = Star;