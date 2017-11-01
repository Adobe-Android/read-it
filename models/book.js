'use strict';
module.exports = (sequelize, DataTypes) => {
  var Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    genre_id: DataTypes.INTEGER,
    publisher: DataTypes.STRING,
    publishd_date: DataTypes.STRING,
    age_group: DataTypes.STRING,
    summary: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, { underscored: true, timestamps: false });

  Book.associate = (models) => {
    Book.belongsTo(models.User, {
      foreignKey: 'id',
      onDelete: 'CASCADE'
    });

    Book.hasOne(models.Book_genres, {
      foreignKey: 'id',
    });

  };

  return Book;
};