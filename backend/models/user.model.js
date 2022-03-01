const mongoose = require('mongoose');
const { isEmail } = require('validator')

const Schema = mongoose.Schema;

function isMobile(num) {

    if (num.match(/^\d{10}$/)) {
        return true;
    }

    return false;
}

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validator: [isEmail, 'Invalide Email']
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        validator: [isMobile, 'Invalid Mobile Number']
    },
    role: {
        type: String,
        required: true,
    },
    address: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;