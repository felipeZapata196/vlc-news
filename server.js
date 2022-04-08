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





const port = process.env.PORT || 3000;
const server = app.listen(port, ()=>{
  console.log(`App runing on port ${port}...`)
})


app.listen(8000, ()=>{
    console.log("listening  to requests 3000")
});
