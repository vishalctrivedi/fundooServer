const express = require('express');

const router = express.Router();

const userController = require("../controllers/userController");

router.post('/registration', userController.registerController);

router.post('/login', userController.loginController);

//router.post('/logout', userController.logoutController);

module.exports=router;