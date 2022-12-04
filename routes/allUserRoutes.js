const express = require('express');
const router = express.Router();
const userController = require('../controller/userController.js');
const verify = require('./verifyToken');

// /users
router.get('/', userController.allUser); // all user

module.exports = router;