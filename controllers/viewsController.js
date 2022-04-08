
const Entrada = require('./../models/blogModel');
const authController = require('./authController');
const User = require('./../models/userModel');
const ejs = require('ejs');
const AppError =  require('./../utils/AppError');


exports.prueba = async(req, res) => {
    const entradas =  await Entrada.find();

    if(!entradas){
        return next(new AppError('no se encuentra el producto', 404));
      }

    res.status(200)    
    .render('mainPage',{
      entradaList: entradas

    } );

};


