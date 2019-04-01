const usermodel = require("../app/models/usermodel");

exports.registerService = (reqData, callback) => {

    usermodel.register(reqData, (err, result) => {
        if (err) {
            return callback(err);
        }
        else {
            return callback(null, result);
        }
    })
}

exports.loginService = (reqData, callback) => {

    usermodel.login(reqData, (err, result) => {
        if (err) {
            return callback(err);
        }
        else {
            return callback(null, result);
        }
    })
}

exports.forgotPasswordService = (reqData, callback) => {
    usermodel.forgotPassword(reqData, (err, result) => {
        if (err) {
            return callback(err);
        }
        else {
            return callback(null, result);
        }
    })
}

exports.resetPasswordService = (reqData, callback) => {
    usermodel.resetPassword(reqData, (err, result) => {
        if (err) {
            return callback(err);
        }
        else {
            return callback(null, result);
        }
    })
}