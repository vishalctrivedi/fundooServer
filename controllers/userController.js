
const userService = require("../services/userServices")

exports.loginController = (req, res) => {
    userService.loginService(req.body, (err, result) => {
        if (err) {
            res.status(400).send({
                message: "User Registration not successful"
            });
        }
        else {
            res.status(200).send({
                message: "User Registration successful"
            });
        }
    })
}

exports.registerController = (req, res) => {
    userService.registerService(req.body, (err, result) => {
        if (err) {
            res.status(400).send({
                status: "unsuccessful",
                message: "User Registration not successful",
            });
        }
        else {
            res.status(200).send({
                message: "User Registration successful",
                status: "ok",
                token: result.token
            });
        }
    })
}