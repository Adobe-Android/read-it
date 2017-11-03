'use strict';

const { Router } = require('express');
const router = Router();

const { getAllBooks, postOneBook } = require('../controllers/bookCtrl');

// When the request is a GET on the product-details route, call get product details.
router.get('/search-books', getAllBooks);
router.post('/add-book/:id', postOneBook);
// router.get('/get-one-book', getOneBook);


module.exports = router;