'user strict';

let request = require('request');


module.exports.getAllBooks = (req, res, next) => {
  
  // Book.findAll({
    //   where: {
      //     title: {
        //       $iLike: `%${req.query.title}%`
        //     }
        //   }
        // })
        
    if (req.query.title) {
          
    request("https://www.googleapis.com/books/v1/volumes?q=${req.query.title}", function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
      res.json(body);
      // response.render('search_all_books', body);
    });
    } else {
      res.render('search_all_books');
    }
  }

module.exports.testFunc = (req, res, next) => {
  console.log("in test func!");
}