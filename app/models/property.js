'use strict';
module.exports = function(sequelize, DataTypes) {
  var Property = sequelize.define('Property', {
    Name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    UserId: {
      type: DataTypes.INTEGER,
      references: {model: 'User', key: 'id'}
    }
  }, {
    classMethods: {
      associate: function(models) {
        Property.belongsTo(models.User);
      }
    }
  });
  return Property;
};
