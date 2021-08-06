const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const outfitSchema = new Schema({
    clothes: {
        type: Array
    }
})

var Outfit = mongoose.model('Outfit',outfitSchema);
module.exports = Outfit;
