'use strict';

const { Router } = require('express');
const router = Router();

const { getAllBooks, getUserBooks, postOneBook, putReview } = require('../controllers/bookCtrl');

router.get('/', (req, res, next) => {
  res.render('index');
});
//public routes

// pipe all other requests through the route modules
router.use(require('./authRoute'));
router.use(require('./bookRoute'))


// router.use(require('./foo'));
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/login');
}
router.use(isLoggedIn);
//private routes
router.get('/search-books', getAllBooks);

module.exports = router;