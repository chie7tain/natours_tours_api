const express = require('express');
const app = express();

const morgan = require('morgan'); // 3rd party middleware
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
// 1) MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});

// 3) ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
