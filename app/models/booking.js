'use strict';
module.exports = function(sequelize, DataTypes) {
  var Booking = sequelize.define('Booking', {
    booking_date: DataTypes.DATE,
    UserId: {
      type: DataTypes.INTEGER,
      references: {model: 'User', key: 'id'}
    },
    PropertyId: {
      type: DataTypes.INTEGER,
      references: {model: 'Property', key: 'id'}
    }
  }, {
    classMethods: {
      associate: function(models) {
        Booking.belongsTo(models.User);
        Booking.belongsTo(models.Property);
      }
    }
  });
  return Booking;
};
