const express = require('express');
const morgan = require('morgan');
const path = require('path');
const globalErrorHandler = require('./controllers/errorController');
const blogRouter = require('./routes/blogRouter');
const userRouter = require('./routes/userRouter');
const viewsRouter = require('./routes/viewsRouter')
cors = require("cors");
const app = express();

app.use(express.json()); 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


app.use(express.static(path.join(__dirname, 'public')));





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
app.use('/', viewsRouter)

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  });

app.use(globalErrorHandler);

module.exports = app;

