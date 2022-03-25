'use strict';



module.exports =(sequelize, DataTypes) => {
  return sequelize.define('Bands', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    members: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    genre: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
};