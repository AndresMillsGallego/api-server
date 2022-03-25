'use strict';

const supertest = require('supertest');
const server = require('../src/server');
const { sequelize, vinylRecordCollection } = require('../src/models');
const request = supertest(server.app);

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
});

describe('Test our REST routes', () => {

  test('API should return a 404 status if the route is bad', async () => {
    const response = await request.get('/invalidRoute');
    expect(response.status).toEqual(404);
  });

  test('Should create a record', async () => {
    const vinylRecordInstance = await vinylRecordCollection.create({title: 'test title', bandName: 'test band'});
    expect(vinylRecordInstance.title).toEqual('test title');
    expect(vinylRecordInstance.bandName).toEqual('test band');
  });

});