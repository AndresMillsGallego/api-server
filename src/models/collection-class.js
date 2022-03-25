'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }
  
  async create(json) {
    try {
      let collectionInstance = await this.model.create(json);
      return collectionInstance;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async read(id) {
    try {
      const collectionId = +id;
      let idToCompare = {where: {id: collectionId}};
      let result = await this.model.findOne(idToCompare);
      return result;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async update(id, updatedData) {
    try {
      const collectionId = +id;
      let idToCompare = {where: {id: collectionId}};
      let collectionToUpdate = await this.model.findOne(idToCompare);
      let updatedCollection = await collectionToUpdate.update(updatedData);
      return updatedCollection;

    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async delete(id) {
    try {
      const collectionId = +id;
      let idToCompare = {where: {id: collectionId}};
      let collectionToDelete = await this.model.findOne(idToCompare);
      await this.model.destroy(idToCompare);
      return collectionToDelete;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

}



module.exports = Collection;