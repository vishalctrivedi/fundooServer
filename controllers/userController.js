
const userService = require("../services/userServices")
const util = require("../util/token")

exports.registerController = (req, res) => {
    try {
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
    catch (err) {
        console.log("exception.......!registerController");

    }
}

exports.loginController = (req, res) => {
    try {
        userService.loginService(req.body, (err, result) => {
            if (err) {
                res.status(400).send({
                    //message: "Login not successful",
                    result: err
                });
            }
            else {
                payload = {
                    User_id: result._id,
                    email: userService.email
                }
                const obj = util.GenerateToken(payload);
                res.status(200).send({
                    result: result,
                    token: obj.token
                })
            }
        })
    }
    catch (err) {
        console.log("exception.........!logincontroller");
    }
}

exports.forgotPasswordController = (req, res) => {
    try {
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
    catch (err) {
        console.log("exception........!forgotpasswordcontroller");

    }
}

exports.resetPasswordController = (req, res) => {
    console.log(req.body);
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