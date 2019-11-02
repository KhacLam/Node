const mongoose = require('mongoose');
const validator = require('validator');
const slugify = require('slugify');

const brandSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "Brand must have name!"]
    },
    slug: String,
    img: {
        type: String,
        required: [true, "Brand must have image!"]
    },
    products: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Product'
    }],
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    }
})

brandSchema.pre('save', function(next) {
    this.slug = slugify(this.name, { lower: true });
    next();
})

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;