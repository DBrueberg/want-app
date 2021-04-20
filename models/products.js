let mongoose = require('mongoose');

let productsSchema = new mongoose.Schema({
    brand: String,
    name: String,
    description: String,
    category: String,
    price: String,
    image: String
});

module.exports = mongoose.model('Products', productsSchema);