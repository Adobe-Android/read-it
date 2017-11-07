'use strict';
module.exports = (sequelize, DataTypes) => {
  var Book = sequelize.define('Book', {
    api_id: DataTypes.STRING
  }, { underscored: true, timestamps: false });

  Book.associate = (models) => {
    Book.belongsToMany(models.User, {
      foreignKey: 'book_id',
      through: 'User_Books',
      timestamps: false,
      onDelete: 'CASCADE'
    });
  };

  return Book;
};