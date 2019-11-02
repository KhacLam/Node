const express = require('express');
const cateController = require('./../controllers/categoryContoller');

const router = express.Router();

router
    .route('/')
    .get(cateController.getAllCate)
    .post(cateController.createCate)

module.exports = router;