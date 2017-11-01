'use strict';
module.exports = (sequelize, DataTypes) => {
  var Book_genres = sequelize.define('Book_genres', {
    name: DataTypes.STRING
  }, { timestamps: false });

  Book_genres.associate = (models) => {
    Book_genres.hasMany(models.Book, {
      foreignKey: 'genre_id'
    });
  };
  return Book_genres;
};