const Product = require("../models/product.model");

//DATABASE FUNCTIONALITY

module.exports = {

    //get all
    getAll(req, res) {
        console.log("getAll method initialized")
        Product.find()
        .then((allProduct) => res.json({Product: allProduct }))
        .catch((err) => res.json({ message: 'Cannot getAll Products', error: err }))
    },

    //get by ID or get one
    getOne(req, res) {
        console.log("getOne method initialized")
        Product.findOne({_id: req.params.id})
        .then((oneProduct) => res.json({Product: oneProduct }))
        .catch((err) => res.json({ message: 'Cannot get Product', error: err }))
    },

    //create method
    createProduct(req, res){
        console.log("create method initialized")
        const { title, price, description } = req.body;
        Product.create({
            title,
            price,
            description
        })
        .then((createProduct) => res.json({Product: createProduct }))
        .catch((err) => res.json({ message: 'Cannot Create Product', error: err }))
    },

    //update method
    updateProduct(req, res){
        console.log("update method initialized")
        Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true })
        .then((updateProduct) => res.json({Product: updateProduct }))
        .catch((err) => res.json({ message: 'Cannot Update Product', error: err }))
    },

    //delete method
    deleteProduct(req, res){
        console.log("delete method initialized")
        Product.deleteOne({ _id: req.params.id })
        .then(deleteProduct => res.json({Product: deleteProduct }))
        .catch((err) => res.json({ message: 'Cannot Delete Product', error: err }))
    }
}