const usermodel= require("../app/models/usermodel");

exports.loginService = (reqData, callback) => {

    usermodel.findUser(reqData, (err, result) => {
        if (err) {
            return callback(err);
        }
        else {
            return callback(null, result);
        }
    })
}

exports.registerService = (reqData, callback) => {

    usermodel.saveUserDetails(reqData, (err, result) => {
        if (err) {
            return callback(err);
        }
        else {
            return callback(null, result);
        }
    })
}