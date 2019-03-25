
const userService = require("../services/userServices")

exports.registerController = (req, res) => {
    userService.registerService(req.body, (err, result) => {
        if (err) 
        {
            res.status(400).send({
                status: "unsuccessful",
                message: "User Registration not successful",
            });
        }
        else 
        {
            res.status(200).send({
                status: "successful",
                message: "User Registration successful",
                token: result.token
            });
        }
    })
}

exports.loginController = (req, res) => {
    userService.loginService(req.body, (err, result) => {
        if (err) {
            res.status(400).send({
                message: "Login not successful"
            });
        }
        else {
            res.status(200).send({
                message: "Login successful"
            });
        }
    })
}