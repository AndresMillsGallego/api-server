'use strict';

const supertest = require('supertest');
const server = require('../src/server');
const { sequelize } = require('../src/models');
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

  test('Testing the POST route', async () => {
    const response = await request.post('/record').send({
      title: 'test title', 
      bandName: 'test band',
      yearReleased: 1996,
      genre: 'Punk Rock',
    });
    expect(response.status).toEqual(200);
    expect(response.body.title).toEqual('test title');
    expect(response.body.bandName).toEqual('test band');
    expect(response.body.yearReleased).toEqual(1996);
    expect(response.body.genre).toEqual('Punk Rock');
  });
  
  test('Testing the GET ALL route', async () => {
    // Will return an array no matter what, so we need to use an index position for the strict test
    const response = await request.get('/record');
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body));
  });

  test('Testing the GET ONE route', async () => {
    // Returns an object, no need for index position
    const response = await request.get('/record/1');
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
    expect(response.body.title).toEqual('test title');
    expect(response.body.bandName).toEqual('test band');
    expect(response.body.yearReleased).toEqual(1996);
    expect(response.body.genre).toEqual('Punk Rock');
    expect(typeof response.body === 'object');
  });

  test('Testing the PUT route', async () => {
    const response = await request.put('/record/1').send({title: 'test title 2'});
    expect(response.status).toEqual(200);
    expect(response.body.title).toEqual('test title 2');
    expect(typeof response.body === 'object');
  });

  test('Testing the delete route', async () => {
    const response = await request.delete('/record/1');
    expect(response.status).toEqual(200);
    expect(typeof response.body === 'object');
  });
  
});
