'use strict';
module.exports = (sequelize, DataTypes) => {
  var Book = sequelize.define('Book', {
    categories: DataTypes.ARRAY(DataTypes.TEXT),
    title: DataTypes.STRING,
    authors: DataTypes.ARRAY(DataTypes.TEXT),
    publisher: DataTypes.STRING,
    published_date: DataTypes.STRING,
    maturity_rating: DataTypes.STRING,
    description: DataTypes.TEXT,
  }, { underscored: true, timestamps: false });

  Book.associate = (models) => {
    Book.belongsTo(models.User, {
      foreignKey: 'id',
      onDelete: 'CASCADE'
    });
  };

  return Book;
};