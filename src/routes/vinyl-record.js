'use strict';

const express = require('express');

const { vinylRecordCollection } = require('../models');

const router = express.Router();

router.post('/record', async (request, response, next) => {
  try {
    let newRecordData = request.body;
    let recordResponseData = await vinylRecordCollection.create(newRecordData);
    response.status(200).send(recordResponseData);
  } catch (error) {
    console.error(error);
  }
});

router.get('/record', async (request, response, next) => {
  let allVinylRecordData = await vinylRecordCollection.readAll();
  response.status(200).send(allVinylRecordData);
});

router.get('/record/:id', async (request, response, next) => {
  let recordId = request.params.id;
  let oneRecordData = await vinylRecordCollection.readOne(recordId);
  response.status(200).send(oneRecordData);
});

router.put('/record/:id', async (request, response, next) => {
  let recordId = request.params.id;
  let updatedData = request.body;
  let updatedRecordData = await vinylRecordCollection.update(recordId,updatedData);
  response.status(200).send(updatedRecordData);
});

router.delete('/record/:id', async (request, response, next) => {
  let recordId = request.params.id;
  let deletedVinylRecord = await vinylRecordCollection.delete(recordId);
  response.status(200).send(deletedVinylRecord);
});

module.exports = router;