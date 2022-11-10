require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const helmet = require('helmet');
const routes = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');
const limiter = require('./middlewares/rateLimiter');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 4000, NODE_ENV, MONGO_URI } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);

app.use(helmet());

app.use('/', routes);

app.use(errorLogger);

app.use(errors());
app.use(errorHandler);

app.use(limiter);

mongoose.connect(NODE_ENV === 'production' ? MONGO_URI : 'mongodb://127.0.0.1:27017/moviesdb');

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
