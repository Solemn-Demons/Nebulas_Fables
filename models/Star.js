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
        starname_name: {
            type: DataTypes.TEXT,
            allowNull: false,

        },
        //reference constellation id
        constellation_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'constellation',
                key: 'id',
            },
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'star',
      }
);

module.exports = Star;