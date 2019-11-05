const express = require('express');
const Category = require('./../models/categoryModel');
const app = require('./../app');

const localVar = express();

localVar.use(async(req, res, next) => {
    res.locals.cate = await Category.find();
    next();
})

module.exports = localVar;