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
      console.log(parsed)
      let books = parsed.items;
      res.render('all_books', {books});
    });
    } else {
      res.render('search_all_books');
    }
  }

module.exports.postOneBook = (req, res, next) => {
  console.log("reaching postOneBook func!");
  const { Book, User } = req.app.get('models');
  Book.create({
    api_id: req.params.id
  })
  .then((newBook) => {
    return newBook.addUser(req.session.passport.user.id)
  })
  .catch((err) => {
    next(err);
  });
};

// module.exports.getOrders = (req, res, next) => {
//   let ordersList;
//   const { Order, Product } = req.app.get('models');
//   Order.findOne({ where: { user_id: req.session.passport.user.id, open_closed: true } })
//     .then((ordersData) => {
//       // console.log("please work???????", ordersData)
//       ordersList = ordersData;
//       return ordersData.getProducts()
//     })
//     .then((productData) => {
//       const { dataValues: currentOrder } = ordersList;
//       // console.log("have mercy!!!!", orders)
//       res.render('orders', { currentOrder, productData });
//     })
//     .catch((err) => {
//       next(err);
//     });
// };

module.exports.getUserBooks = (req, res, next) => {
  const { Book, User } = req.app.get('models');
  // console.log("req params", req.session.passport.user.id)
  User.findOne({ where: {id: req.session.passport.user.id}})
  .then((user) => {
    // console.log("user", user)
    return user.getBooks();
  })
  .then((bookData) => {
      let bookArr = [];
      let apiData = [];
      let parsed;
      let book;
      for (let i = 0; i < bookData.length; i++) {
        request(`https://www.googleapis.com/books/v1/volumes/${bookData[i].dataValues.api_id}`, function (error, response, body) {
          parsed = JSON.parse(body);
            // u003cp: " ",
            // u003c: " ",
            // u003e: " ",
            // u003ci: " "
          let rep = /<p>|<b>|<\/b>|<\/p>|<i>|<\/i>|<br>|\/|/gi
          let str = "";
          parsed.volumeInfo.description = parsed.volumeInfo.description.replace(rep, str);
          console.log(parsed);
          book = parsed;
          // console.log("book body!!", book);
          bookArr.push(book);
          // console.log("book array", bookArr);
          
          if (i === bookData.length -1 ) {
            console.log("getting to if statement");
            res.locals.bookArr = bookArr;
            res.render('read_it')
          }
      })
    }

    // console.log("apiData array", apiData);

      // `https://www.googleapis.com/books/v1/volumes/volumeId&
    })
    .catch((err) => {
      next(err);
    });
};