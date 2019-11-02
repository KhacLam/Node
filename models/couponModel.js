const mongoose = require('mongoose');
const validator = require('validator');

const couponSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Coupon must have name!"]
    },
    discount: {
        type: Number,
        required: [true, "Coupon must have discount!"]
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    },
    duration: {
        type: Date
    }
})

const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;