const express = require('express');
const morgan = require('morgan');
const path = require('path');
const globalErrorHandler = require('./controllers/errorController');
const blogRouter = require('./routes/blogRouter');
const userRouter = require('./routes/userRouter');
cors = require("cors");
const app = express();

app.use(express.json()); 






app.use(express.static(path.join(__dirname, 'client/build')));

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }
  
app.use(cors());
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    // console.log(req.headers);
    next();
  });
app.use('/api/home', blogRouter);
app.use('/api/home/users', userRouter);
app.get('*', (req, res) => { 
  res.sendFile(path.join(__dirname + '/client/build/index.html')) 
});


app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  });

app.use(globalErrorHandler);

module.exports = app;

