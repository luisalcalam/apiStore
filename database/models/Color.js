const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Color extends Model {}
Color.init({

    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo nombre no puede ser nulo"
            },
            len: {
                args: [3, 255],
                msg: "El nombre tiene que ser entre 3 y 255 caracteres"
            }
        },
    },

    code: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo color no puede ser nulo"
            },
            len: {
                args: [4, 7],
                msg: "El color tiene que ser entre 4 y 7 caracteres"
            }
        },
    }

}, {
    sequelize,
    modelName: "color",
    timestamps: false
});

module.exports = Color;