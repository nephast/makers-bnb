'use strict';
module.exports = function(sequelize, DataTypes) {
  var Booking = sequelize.define('Booking', {
    booking_date: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Booking;
};