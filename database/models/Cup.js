const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Cup extends Model {}
Cup.init({

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

    volume: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo capacidad no puede ser nulo"
            },
            len: {
                args: [3, 255],
                msg: "El color tiene que ser entre 3 y 255 caracteres"
            }
        }
    },

    // Si es 0 es usuario normal y si es 1 es administrador
    material: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo material no puede ser nulo"
            },
            len: {
                args: [3, 255],
                msg: "El material tiene que ser entre 3 y 255 caracteres"
            }
        }
    },

    fullname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo nombre completo no puede ser nulo"
            },
            len: {
                args: [3, 255],
                msg: "El nombre completo tiene que ser entre 3 y 255 caracteres"
            }
        }
    },

    imageurl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo imageurl completo no puede ser nulo"
            },
            len: {
                args: [3, 255],
                msg: "La url de imagen tiene que ser entre 3 y 255 caracteres"
            }
        }
    },

    cupsnumber: {
        type: DataTypes.INTEGER
    }

}, {
    sequelize,
    modelName: "cup",
    timestamps: false
});

module.exports = Cup;