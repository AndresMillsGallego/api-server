'use strict';

const express = require('express');
const { GpkModel } = require('../models');
const router = express.Router();

router.post('/gpk', async (request, response, next) => {
  try {
    let newGpkData = request.body;
    let gpkResponseData = await GpkModel.create(newGpkData);
    response.send(gpkResponseData);
  } catch (error) {
    console.error(error);
  }
});

router.get('/gpk', async (request, response, next) => {
  let allGpkData = await GpkModel.findAll();
  response.send(allGpkData);
});

router.get('/gpk/:id', async (request, response, next) => {
  let gpkId = request.params.id;
  let idToCompare = {where: {id: gpkId}};
  let oneGpkData = await GpkModel.findOne(idToCompare);
  response.send(oneGpkData);
});

router.put('/gpk/:id', async (request, response, next) => {
  let gpkId = request.params.id;
  let idToCompare = {where: {id: gpkId}};
  let updatedData = request.body;
  let gpkToUpdate = await GpkModel.findOne(idToCompare);
  let updatedGpkData = await gpkToUpdate.update(updatedData);
  response.send(updatedGpkData);
});

router.delete('/gpk/:id', async (request, response, next) => {
  let gpkId = request.params.id;
  let idToCompare = {where: {id: gpkId}};
  await GpkModel.destroy(idToCompare);
  response.status(200).send(null);
});

module.exports = router;