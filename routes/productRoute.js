const express = require('express');
const productController = require('./../controllers/productController');
const authController = require('./../controllers/authController');

const router = express.Router();

router
    .route('/')
    .post(authController.protectRoute, productController.createProduct)

module.exports = router;