'use strict';

const { Router } = require('express');
const router = Router();

const { getAllBooks, postOneBook, getUserBooks, putReview } = require('../controllers/bookCtrl');

// When the request is a GET on the product-details route, call get product details.
router.get('/search-books', getAllBooks);
router.post('/add-book/:id', postOneBook);
router.get('/read-it', getUserBooks);
router.put('/add-review/:id', putReview);



module.exports = router;