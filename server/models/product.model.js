const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "must include a title"],
        maxLength: [25, "You're doin too much, shorten it to 25 characters or less"],
        minLength: [3, "You must be at least THIS (3 characters) tall to ride this ride"]
    },
    price: {
        type: Number,
        required: [true, "Gotta cost Something."],
    },
    description: {
        type: String,
        required: [true, "Can't leave it blank"],
        maxLength: [200, "You're doin too much, shorten it to 200 characters or less"],
        minLength: [10, "Way too short, bump that up to 10 characters or more fam"]
    }
})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;