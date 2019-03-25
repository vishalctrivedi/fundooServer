const usermodel= require("../app/models/usermodel");

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
