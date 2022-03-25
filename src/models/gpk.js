'use strict';



module.exports =(sequelize, DataTypes) => {
  return sequelize.define('GPKs', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    series: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    cardNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
};