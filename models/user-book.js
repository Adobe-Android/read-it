'use strict';
module.exports = (sequelize, DataTypes) => {
  var User_Books = sequelize.define('User_Books', {
    up_vote: DataTypes.BOOLEAN,
    review: DataTypes.TEXT
  }, { underscored: true, timestamps: false });

  return User_Books;
};