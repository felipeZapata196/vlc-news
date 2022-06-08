const express = require ('express');
const viewsController = require('./../controllers/viewsController');

const router = express.Router();




router.route('/').get(viewsController.prueba)
router.route('/:id').get(viewsController.getPost)




module.exports = router;