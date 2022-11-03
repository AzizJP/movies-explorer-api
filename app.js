require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const helmet = require('helmet');
const routes = require('./routes/index');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000 } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);

app.use(helmet());

app.use('/', routes);

app.use(errorLogger);

app.use(errors());

mongoose.connect('mongodb://127.0.0.1:27017/bitfilmsdb');

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
