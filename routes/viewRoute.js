const express = require('express');
const viewController = require('./../controllers/viewController');

const router = express.Router();

router.get('/', viewController.getIndex);
router.get('/contact', viewController.getContact);

router.get('/login', viewController.getLogin);
router.get('/register', viewController.getRegister);

router.get('/cart', viewController.getCard);
router.get('/checkout', viewController.getCheckout);


// Admin template
router.get('/manage', viewController.getManage);


module.exports = router;