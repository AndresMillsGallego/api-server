'use strict';

require('dotenv').config();

const express = require('express');
const vinylRecordRouter = require('./routes/vinyl-record');
const gpkRouter = require('./routes/gpk');
const bandRouter = require('./routes/band');
// const handle404 = require('./error-handlers/404');
// const handle500 = require('./error-handlers/500');

const app = express();

app.use(express.json());

app.get('/', (request, response, next) => {
  response.send('King Snorlax welcomes you to his server');
});

app.use(vinylRecordRouter);
app.use(gpkRouter);
app.use(bandRouter);

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log('Jigglypuff is listening on port' + PORT);
    });
  },
};