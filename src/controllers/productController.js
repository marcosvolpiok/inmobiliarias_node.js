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

controller.updateForm = async (req, res) => {
    const product = await Product.findById(req.params.id);
    console.log(product)
    res.render('productEdit', { product });
}

controller.update = async (req, res) => {
    const { id } = req.params;
    await Product.update({_id: id}, req.body);
    res.redirect('/');
}




module.exports = controller;