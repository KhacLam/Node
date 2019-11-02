const mongoose = require('mongoose');
const validator = require('validator');

const couponSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Coupon must have name!"]
    }
})

const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;