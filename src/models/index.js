'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const Collection = require('./collection-class');
const vinylRecordShcema = require('./vinyl-record');
const gpkSchema = require('./gpk');
const bandSchema = require('./band');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory'
  : process.env.DATABASE_URL || 'postgresql://localhost:5432/api-server';

const sequelize = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const VinylRecordModel = vinylRecordShcema(sequelize, DataTypes);
const GpkModel = gpkSchema(sequelize, DataTypes);
const BandModel = bandSchema(sequelize, DataTypes);

BandModel.hasMany(VinylRecordModel, {foreignKey: 'bandId', sourceKey: 'id'});
VinylRecordModel.belongsTo(BandModel, {foreignKey: 'customerId', targetKey: 'id'});


module.exports = {
  sequelize,
  vinylRecordCollection: new Collection(VinylRecordModel),
  gpkCollection: new Collection(GpkModel),
  bandCollection: new Collection(BandModel),
};