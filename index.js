// const express = require('express'); // Import Common
import express from 'express'
import router from './routes/index.js'
import db from './config/db.js';


const app = express(); // Una unica isntancia de nuestra aplicacion

// Conectar la base de datos
db.authenticate()
    .then( () => console.log('Base de Datos Conectada'))
    .catch( error => console.log(error));

// Definir puerto
    
const port = process.env.PORT || 4000;

// Habilitar pug
app.set('view engine', 'pug')

// Obtener el año actual

app.use((req, res, next) => {
    const year = new Date().getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes'
    
    res.locals.actualYear = year;

    next();
});

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

// Definir la carpeta publica
app.use(express.static('public'));

// Agregar Router
app.use('/', router);

app.listen( port, () => {  
    console.log(`El servidor está funcionando en el puerto ${port}`)
});