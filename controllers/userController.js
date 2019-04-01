
const userService = require("../services/userServices")

exports.registerController = (req, res) => {
    userService.registerService(req.body, (err, result) => {
        if (err) {
            res.status(400).send({
                status: "unsuccessful",
                //message: "User Registration not successful",
                result: err
            });
        }
        else {
            res.status(200).send({
                status: "successfull",
                result: result,
                //token: result.token
            });
        }
    })
}

exports.loginController = (req, res) => {
    userService.loginService(req.body, (err, result) => {
        if (err) {
            res.status(400).send({
                //message: "Login not successful",
                result: err
            });
        }
        else {
            res.status(200).send({
                // message: "Login successful",
                result: result
            });
        }
    })
}

exports.forgotPasswordController = (req, res) => {
    userService.forgotPasswordService(req.body, (err, result) => {
        if (err) {
            res.status(400).send({
                result: err
            });
        }
        else {
            res.status(200).send({
                result: result
            });
        }
    })
}

exports.resetPasswordController = (req, res) => {
    userService.resetPasswordService(req.body, (err, result) => {
        if (err) {
            res.status(400).send({
                result: err
            });
        }
        else {
            res.status(200).send({
                result: result
            });
        }
    })
}