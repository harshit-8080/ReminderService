'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notification_Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Notification_Ticket.init({
    subject: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    content: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    recepientEmail:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    status:{
      type:DataTypes.ENUM ,
      allowNull:false,
    },
    notificationTime: {
      type:DataTypes.DATE,
      allowNull:false,
      values:["PENDING","SUCCESS","FAILED"]
    },
  }, {
    sequelize,
    modelName: 'Notification_Ticket',
  });
  return Notification_Ticket;
};