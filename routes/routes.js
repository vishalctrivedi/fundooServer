import userController from "../controllers/userController";

module.exports = (app) => {
    const router = express.Router();

    const userController = require("../controllers/userController");

    router.post('/login', userController.loginController);

    router.post('/registrtaion', userController.registerController);

    router.post('/logout', userController.logoutController);
}
