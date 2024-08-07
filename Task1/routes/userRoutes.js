const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// new user
router.post('/users', userController.create);

// retrieve all users
router.get('/users', userController.findAll);

// retrieve user by ID
router.get('/users/:id', userController.findOne);

// Update user
router.put('/users/:id', userController.update);

// Delete user :)
router.delete('/users/:id', userController.delete);

module.exports = router;
