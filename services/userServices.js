import usermodel from "../app/models/usermodel";

export const loginService = (reqData, callback) => {

    usermodel.findUser(reqData, (err, result) => {
        if (err) {
            return callback(err);
        }
        else {
            return callback(null, result);
        }
    })
}

export const registerService = (reqData, callback) => {

    usermodel.saveUserDetails(reqData, (err, result) => {
        if (err) {
            return callback(err);
        }
        else {
            return callback(null, result);
        }
    })
}