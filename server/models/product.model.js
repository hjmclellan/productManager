const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    //title, price, descriptions, timestamps
    title: {
        type: String,
        required: [true, "must include a title"],
        validate: {
            validator: (input) => {
                return input.length >= 3;
            },
            message: (input) => `${input.value} must be at least 3 characters!`
        }
    },
    price: {
        type: Number,
        required: [true, "must include price"],
        validate: {
            validator: (input) => {
                return input >= 0;
            },
            message: (input) => `${input.value} must be greater than 0`
        }
    },
    description: {
        type: String,
        required: [true, "must include a description"],
        validate: {
            validator: (input) => {
                return input.length >= 3;
            },
            message: (input) => `${input.value} must be at least 3 characters!`
        }
    }
})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;