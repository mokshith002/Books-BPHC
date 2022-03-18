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

    email: {
        type: String,
        required: true,
        unique: true,
        validator: [isEmail, 'Invalide Email']
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        validator: [isMobile, 'Invalid Mobile Number']
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    address: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;