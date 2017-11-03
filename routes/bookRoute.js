'use strict';

const { Router } = require('express');
const router = Router();

const { getAllBooks, testFunc } = require('../controllers/bookCtrl');

// When the request is a GET on the product-details route, call get product details.
router.get('/books', testFunc);
router.get('/search-books', getAllBooks);


module.exports = router;