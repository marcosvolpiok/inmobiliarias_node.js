const router = require('express').Router();

const productController = require('../controllers/productController');


router.get('/', productController.list);
router.post('/add', productController.add);
router.get('/update/:id', productController.updateForm);
router.post('/update/:id', productController.update);


/*
router.post('/update/:id', productController.update);
router.get('/delete/:id', productController.delete);
*/


module.exports = router;