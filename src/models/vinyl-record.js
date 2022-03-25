'use strict';



module.exports = (sequelize, DataTypes) => {
  return sequelize.define('records', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bandName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    yearReleased: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};