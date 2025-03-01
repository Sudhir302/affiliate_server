const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName:{
        type: String,
        required: true
    },
    productLink: {
        type: String,
        required: true,
    },
    productCategory:{
        type: String,
        required: true,
    },
    productImage:{
        type: String,
        required: true,
    },
    productDescription:{
        type: String,
        required: true,
    },
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;