const express = require('express');

const router = express.Router();

const userController = require("../controllers/userController");
const noteController = require('../controllers/noteController')

router.post('/registration', userController.registerController);

router.post('/login', userController.loginController);

router.post('/forgotPassword', userController.forgotPasswordController);

router.post('/resetPassword', userController.resetPasswordController);

router.post('/createNote', noteController.createNoteController);

router.post('/getAllNotes',noteController.getAllNotesController);

router.post('/archiveNotes',noteController.archiveNotesController);

//router.post('/logout', userController.logoutController);

module.exports = router;