const mongoose = require('mongoose');
//comment
const ProductSchema = mongoose.Schema({
    name: {
        type:String,
        required:true
    },

    description: {
        type:String,
        required:true
    },

    quantity: {
        type:Number,
        required:true
    },

    user_id: {
        type:String
        
    }
}); 

module.exports = mongoose.model('product', ProductSchema);