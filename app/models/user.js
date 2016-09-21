'use strict';

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty:true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty:true,
        isEmail:true
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
