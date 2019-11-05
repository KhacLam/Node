const express = require('express');
const path = require('path');
const viewRoute = require('./routes/viewRoute');
const productRoute = require('./routes/productRoute');
const cateRoute = require('./routes/cateRoute');
const usersRoute = require('./routes/userRoute');
const globalError = require('./controllers/errorController');
const localVar = require('./controllers/localsVar');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(localVar)


app.use('/', viewRoute)
app.use('/api/v1/products', productRoute)
app.use('/api/v1/category', cateRoute)
app.use('/api/v1/user', usersRoute)


app.use(globalError);

module.exports = app;