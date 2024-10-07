const mongoose = require('mongoose');

// Create the Product Schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true
    // required: [true, 'Product name is required'],
    // trim: true,
    // maxlength: [100, 'Product name must be less than 100 characters'],
  },
  description: {
    type: String,
    required:true
    // required: [true, 'Product description is required'],
    // maxlength: [1000, 'Description must be less than 1000 characters'],
  },
  price: {
    type: Number,
    required:true
    // required: [true, 'Price is required'],
    // min: [0, 'Price must be a positive number'],
  },
  image: {
    type: String,
    default:" "

    // required: [true, 'Product image is required'],
  },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
  stock: {
    type: Number,
    required: true,
    // min: 0,
    // default: 0,
  },
});

// Create a model from the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
