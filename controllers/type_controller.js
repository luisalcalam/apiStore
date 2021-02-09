const Type = require('../database/models/Type');

const getTypes = (req, res) => {
    Type.findAll({})
        .then(types => res.json(types))
        .catch(err => {
            res.json({
                status: false,
                err
            })
        })
};

const insertType = (req, res) => {
    const type = req.body.type
    Type.create({
            name: type.name,
        })
        .then(type => res.json(type))
        .catch(err => {
            res.json({
                status: false,
                err
            })
        })
};

const updateType = (req, res) => {
    const type = req.body.type
    Type.update({
            name: type.name
        }, {
            where: {
                id: type.id
            }
        })
        .then(type => res.json(type))
        .catch(err => {
            res.json({
                status: false,
                err
            })
        })
};

module.exports = {
    getTypes,
    insertType,
    updateType
}