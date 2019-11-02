const Product = require('./../models/productModel');
const handleFactory = require('./../controllers/handleFactory')
const AppError = require('./../utlis/appError');
const catchAsync = require('./../utlis/catchAsync');

exports.createProduct = handleFactory.createOneDocument(Product);