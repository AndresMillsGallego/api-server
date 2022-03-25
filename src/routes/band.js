'use strict';

const express = require('express');
const { BandModel } = require('../models');
const router = express.Router();

router.post('/band', async (request, response, next) => {
  try {
    let newBandData = request.body;
    let bandResponseData = await BandModel.create(newBandData);
    response.send(bandResponseData);
  } catch (error) {
    console.error(error);
  }
});

router.get('/band', async (request, response, next) => {
  let allBandData = await BandModel.findAll();
  response.send(allBandData);
});

router.get('/band/:id', async (request, response, next) => {
  let bandId = request.params.id;
  let idToCompare = {where: {id: bandId}};
  let oneBandData = await BandModel.findOne(idToCompare);
  response.send(oneBandData);
});

router.put('/band/:id', async (request, response, next) => {
  let bandId = request.params.id;
  let idToCompare = {where: {id: bandId}};
  let updatedData = request.body;
  let bandToUpdate = await BandModel.findOne(idToCompare);
  let updatedBandData = await bandToUpdate.update(updatedData);
  response.send(updatedBandData);
});

router.delete('/band/:id', async (request, response, next) => {
  let bandId = request.params.id;
  let idToCompare = {where: {id: bandId}};
  await BandModel.destroy(idToCompare);
  response.status(200).send(null);
});

module.exports = router;