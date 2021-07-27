const ProductController = require("../controllers/product.controller");

module.exports = app => {
    //returns all Product with getAll Method
    app.get('/api/products', ProductController.getAll);

    //return one Product with getOne Method
    app.get('/api/products/:id', ProductController.getOne);

    //creates a new Product with create Method
    app.post('/api/products/create', ProductController.createProduct);

    //updates a Product based on id with Update Method
    app.put("/api/products/update/:id", ProductController.updateProduct);

    //deletes a Product based on id with Delete Method
    app.delete("/api/products/delete/:id", ProductController.deleteProduct);
}