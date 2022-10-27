const express = require('express');
const app = express();

const morgan = require('morgan'); // 3rd party middleware

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
// 3) ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
