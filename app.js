const express = require('express');
const cors = require('cors');
const app = express();
const sequelize = require('./database/db');
require('./database/asociations');



// Setting
const PORT = process.env.PORT ||  3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

// Rutas
app.get('/', function(req, res) {
    res.json("Hola Mundo");
});

app.use('/api/cups', require('./routes/cup_routes'));
app.use('/api/types', require('./routes/type_routes'));
app.use('/api/colors', require('./routes//color_routes'));

// Arrancamos el servidor
app.listen(PORT, function() {
    console.log(`La api ha arrancado en http://localhost:${PORT}`);

    // Conectase a la base de datos
    // Force true: DROP TABLES
    sequelize.sync({ force: false }).then(() => {
        console.log("Nos hemos conectado a la base de datos");
    }).catch(error => {
        console.log('Se ha producido un error', error);
    })

});