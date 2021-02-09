const Cup = require('../database/models/Cup');
const Type = require('../database/models/Type');
const Color = require('../database/models/Color');

const getCups = (req, res) => {
    Cup.findAll({
            include: [{
                model: Type
            }, {
                model: Color
            }]
        })
        .then(users => res.json(users))
        .catch(err => {
            res.json({
                status: false,
                err
            })
        })
};

const createCup = (req, res) => {
    const cup = req.body.cup;
    console.log('entro', cup);
    Cup.create({
            name: cup.name,
            volume: cup.volume,
            material: cup.material,
            fullname: cup.fullname,
            imageurl: cup.imageurl,
            cupsnumber: 10,
            typeId: cup.typeId,
            colorId: cup.colorId
        })
        .then(cup => {
            console.log(cup);
            res.json(cup)
        })
        .catch(err => {
            res.json({
                status: false,
                err
            })
        })
}

const updateNumberCup = (req, res) => {
    const sales = req.body.cupsSale
    const Promises = [];
    sales.forEach(sale => {
        const newPromise = Cup.update({
            cupsnumber: sale.total,
        }, {
            where: {
                id: sale.cup.id
            }
        });
        Promises.push(newPromise);
    })
    Promise.all(Promises)
        .then(data => res.json(data))
        .catch(err => {
            res.json({
                status: false,
                err
            })
        })
};

module.exports = {
    getCups,
    createCup,
    updateNumberCup
}