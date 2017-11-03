'user strict';

let request = require('request');


module.exports.getAllBooks = (req, res, next) => {
  console.log("getting to getAllBooks function")
  
  // Book.findAll({
    //   where: {
      //     title: {
        //       $iLike: `%${req.query.title}%`
        //     }
        //   }
        // })

    if (req.query.title) {
      request(`https://www.googleapis.com/books/v1/volumes?q=${req.query.title}&maxResults=5`, function (error, response, body) {
      let parsed = JSON.parse(body);
      let books = parsed.items;
      res.render('all_books', {books});
    });
    } else {
      res.render('search_all_books');
    }
  }

module.exports.testFunc = (req, res, next) => {
  console.log("in test func!");
}