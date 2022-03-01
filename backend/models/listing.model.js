import { Schema as _Schema, model } from 'mongoose';
import User from './user.model';

const Schema = _Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    sellerId: {
        type: String,
        required: true,
    },
    branches: [String],
    courses: [String],
    price: {
        type: Number,
        required: true
    }
});

const Listing = model('Listing', listingSchema);

export default Listing;