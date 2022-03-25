'use strict';

const server = require('./src/server');
const { sequelize } = require('./src/models');

const PORT = process.env.PORT || 3001;


sequelize.sync()
  .then(() => {
    console.log('Eyyyyyyyy We Did It!');
  })
  .catch(error => {
    console.error(error);
  });

server.start(PORT);