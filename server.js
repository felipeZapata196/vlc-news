const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'})
const express = require('express');
const path = require('path');

const db = process.env.DB.replace(
    '<PASSWORD>', 
    process.env.DBPassword);

mongoose
.connect(db, {
   useNewUrlParser: true
}).then( ()=> {
    console.log("connection succesfull")
})


app.use(express.static(
    path.join(__dirname,'../client/build')));



const port = process.env.PORT || 9000;
const server = app.listen(port, ()=>{
  console.log(`App runing on port ${port}...`)
})
