'use strict';

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    Name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty:true
      }
    }, 
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
