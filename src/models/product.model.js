const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Insira o nome do produto'],
    },
    quantity: {
      type: Number,
      required: [true, 'Insira a quantidade do produto'],
      default: 0,
    },
    price: {
      type: Number,
      required: [true, 'Insira o preço do produto'],
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
