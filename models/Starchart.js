const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Starchart extends Model {}


Starchart.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        category_name: {
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

module.exports = Starchart;