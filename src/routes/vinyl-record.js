'use strict';

const express = require('express');
const { VinylRecordModel } = require('../models');
const router = express.Router();

router.post('/record', async (request, response, next) => {
  try {
    let newRecordData = request.body;
    let recordResponseData = await VinylRecordModel.create(newRecordData);
    response.status(200).send(recordResponseData);
  } catch (error) {
    console.error(error);
  }
});

router.get('/record', async (request, response, next) => {
  let allVinylRecordData = await VinylRecordModel.findAll();
  response.send(allVinylRecordData);
});

router.get('/record/:id', async (request, response, next) => {
  let recordId = request.params.id;
  let idToCompare = {where: {id: recordId}};
  let oneRecordData = await VinylRecordModel.findOne(idToCompare);
  response.send(oneRecordData);
});

router.put('/record/:id', async (request, response, next) => {
  let recordId = request.params.id;
  let idToCompare = {where: {id: recordId}};
  let updatedData = request.body;
  let vinylRecordToUpdate = await VinylRecordModel.findOne(idToCompare);
  let updatedRecordData = await vinylRecordToUpdate.update(updatedData);
  response.send(updatedRecordData);
});

router.delete('/record/:id', async (request, response, next) => {
  let recordId = request.params.id;
  let idToCompare = {where: {id: recordId}};
  await VinylRecordModel.destroy(idToCompare);
  response.status(200).send(null);
});

module.exports = router;