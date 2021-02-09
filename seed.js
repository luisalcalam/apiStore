const sequelize = require('./database/db');
const Cup = require('./database/models/Cup');
const Color = require('./database/models/Color');
const Type = require('./database/models/Type');

require('./database/asociations');

const colors = [
    { name: "Azul Cielo Claro", code: "#99ccff" },
    { name: "Blanco", code: "#FFFFFF" },
    { name: "Amarillo", code: "#e3f542" },
    { name: "Verde Claro", code: "#20b2aa" },
    { name: "Naranja", code: "#ff8c00" },
];

const types = [
    { name: "Calidad Baja" },
    { name: "Calidad Alta" },
];

const cups = [
    { name: "Taza lisa", volume: "247ml", material: "Porcelana", fullname: "Taza lisa amarilla 247ml calidad baja", imageurl: "https://printasti.co/wp-content/uploads/2018/11/Taza-magica-11Oz.jpg", cupsnumber: 10, typeId: 1, colorId: 3 },
    { name: "Taza lisa", volume: "247ml", material: "Porcelana", fullname: "Taza lisa blanca 247ml calidad baja", imageurl: "https://printasti.co/wp-content/uploads/2018/11/Taza-magica-11Oz.jpg", cupsnumber: 15, typeId: 1, colorId: 2 },
    { name: "Taza lisa", volume: "450ml", material: "Porcelana", fullname: "Taza lisa naranja 247ml calidad baja", imageurl: "https://printasti.co/wp-content/uploads/2018/11/Taza-magica-11Oz.jpg", cupsnumber: 12, typeId: 1, colorId: 5 },
]

sequelize.sync({ force: false }).then(() => {
    // Conexión establecida
    console.log("Conexión establecida...");
}).then(() => {
    // Rellenar usuarios
    colors.forEach(color => Color.create(color));
}).then(() => {
    // Rellenar direcciones
    types.forEach(type => Type.create(type));
}).then(() => {
    // Rellenar posts
    cups.forEach(cup => Cup.create(cup));

});