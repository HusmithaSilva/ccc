const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    first_name: {
        type:String,
        required:true
    },

    last_name: {
        type:String,
        required:true
    },

    email: {
        type:String,
        required:true
    },

    phone: {
        type:Number,
        required:true
    },

    address: {
        type:String,
        required:true
    }
}); 

module.exports = mongoose.model('user', UserSchema);