'use strict';
module.exports = function(sequelize, DataTypes) {
  var Property = sequelize.define('Property', {
    Name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Property;
};