const Color = require('../database/models/Color');

const getColors = (req, res) => {
    Color.findAll({})
        .then(colors => res.json(colors))
        .catch(err => {
            res.json({
                status: false,
                err
            })
        })
};

const insertColor = (req, res) => {
    const color = req.body.color
    Color.create({
            name: color.name,
            code: color.code
        })
        .then(type => res.json(type))
        .catch(err => {
            res.json({
                status: false,
                err
            })
        })
};

const updateColor = (req, res) => {
    const color = req.body.color
    Color.update({
            name: color.name,
            code: color.code
        }, {
            where: {
                id: color.id
            }
        })
        .then(color => res.json(color))
        .catch(err => {
            res.json({
                status: false,
                err
            })
        })
};

module.exports = {
    getColors,
    insertColor,
    updateColor
}