const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    image: {
        type: String,
        // required: true
    },
    category:{
        type: String,
        // required: true
    },
    price: {
        type: Number
    }
})

var Items = mongoose.model('Item',itemSchema);
module.exports = Items;
