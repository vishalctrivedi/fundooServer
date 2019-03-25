const express = require('express');

const router = express.Router();

const userController = require("../controllers/userController");

router.post('/login', userController.loginController);

router.post('/registration', userController.registerController);

router.post('/logout', userController.logoutController);

module.exports=router;