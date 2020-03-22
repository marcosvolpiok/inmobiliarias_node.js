const controller = {};
const Product = require('../model/product');

controller.list = async (req, res) => {
    const products = await Product.find();
    res.render('productsList', {
        products
    });
}

controller.add = async (req, res) => {
    console.log(req.body);
    const product = new Product(req.body);
    await product.save();
    res.send('Añadido');
    //res.redirect('/');
}



module.exports = controller;