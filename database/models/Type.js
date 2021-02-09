const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Type extends Model {}
Type.init({

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
    }

}, {
    sequelize,
    modelName: "type",
    timestamps: false
});

module.exports = Type;