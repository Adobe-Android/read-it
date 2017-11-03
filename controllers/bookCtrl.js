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

module.exports.postOneBook = (req, res, next) => {
  console.log("reaching postOneBook func!");
  
};

/* module.exports.postProduct = (req, res, next) => {
  const { Product } = req.app.get('models');
  let newPrice = Number(req.body.price);
  Product.create({
    date_added: new Date(),
    name: req.body.name,
    description: req.body.description,
    price: newPrice,
    quantity: req.body.quantity,
    type_id: req.body.selectval,
    user_id: req.session.passport.user.id
  })
  .then( () => {
    res.redirect('welcome');
  })
  .catch( (err) => {
    console.log(err);    
  });
};
*/