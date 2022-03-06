const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: String,
    sellerId: {
        type: String,
        required: true,
    },
    branches: String,
    courses: String,
    price: {
        type: Number,
        required: true
    }
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;