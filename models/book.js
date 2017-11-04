'use strict';
module.exports = (sequelize, DataTypes) => {
  var Book = sequelize.define('Book', {
    api_id: DataTypes.STRING
  }, { underscored: true, timestamps: false });

  Book.associate = (models) => {
    Book.belongsTo(models.User, {
      foreignKey: 'id',
      onDelete: 'CASCADE'
    });
  };

  return Book;
};