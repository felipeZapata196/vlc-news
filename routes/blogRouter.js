const express = require('express');
const postController = require('./../controllers/postController');
const authController = require('./../controllers/authController');

const router = express.Router();



//that is for the main page. is to render the most importants news of each category.
router.route('/international').get(postController.getInternational, postController.getAllPosts);
router.route('/national').get(postController.getNational, postController.getAllPosts);
router.route('/society').get(postController.getSociety, postController.getAllPosts);
router.route('/sports').get(postController.getSports, postController.getAllPosts);
router.route('/tecnology').get(postController.getTecnology, postController.getAllPosts);
router.route('/top-five').get(postController.getTopFive, postController.getAllPosts);

router
.route('/')
.get( postController.getAllPosts)
.post(postController.createPost);

router
.route('/:id')
.get(postController.getPost)
.patch(postController.updatePost)
.delete(
    authController.protect,
    authController.restrictTo('writer', 'admin'),
    postController.deletePost);

module.exports = router;