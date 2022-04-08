const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'})

const db = process.env.DB.replace(
    '<PASSWORD>', 
    process.env.DBPassword);

mongoose
.connect(db, {
   useNewUrlParser: true
}).then( ()=> {
    console.log("connection succesfull")
})


app.listen(3000, ()=>{
    console.log("listen to the port 3000");
})