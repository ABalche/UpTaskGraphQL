const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,   /// caracteristicas recomendadas para mongoose
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log('DB conectado ');
    } catch (error) {
        console.log('Hubo un error');
        console.log(error);
        process.exit(1); // Detener la aplicacion
    }
}

module.exports = conectarDB;