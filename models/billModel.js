const mongoose = require('mongoose');
const validator = require('validator');

const billSchema = mongoose.Schema({
    userID: {
        type: mongoose.Schema.ObjectID,
        ref: "User",
        required: [true, "Bill must belong to one user!"]
    },
    productID: [{
        type: mongoose.Schema.ObjectID,
        ref: "Product",
        required: [true, "Bill must have at least on product!"]
    }],
    total: Number,
    coupon: {
        type: Boolean,
        default: false
    },
    message: String,
    method: {
        type: String,
        enum: ["offline", "online"]
    },
    address: String
})

const Bill = mongoose.model('Bill', billSchema);

module.exports = Bill;