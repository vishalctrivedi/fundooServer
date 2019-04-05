const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const saltRounds = 1;

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
}, {
        timestamps: false
    });


const User = mongoose.model('User', UserSchema);

function userModel() { }

function hash(password) {
    var hash = bcrypt.hashSync(password, saltRounds);
    return hash;
}

userModel.prototype.register = (usersDetails, callback) => {
    User.find({ "email": usersDetails.email }, (err, result) => {

        if (err) {
            return callback("Error in registration")
        }
        else if (result.length > 0) {
            return callback("email already exits");
        }
        else {
            let newUserData = new User({
                name: usersDetails.name,
                email: usersDetails.email,
                password: hash(usersDetails.password)
            })

            newUserData.save((err, result) => {
                if (err) {
                    return callback(err)
                }
                else {
                    result.password = undefined
                    return callback(null, result);
                }
            })
        }
    })
}

userModel.prototype.login = (usersDetails, callback) => {
    User.findOne({ "email": usersDetails.email }, (err, result) => {
        if (err) {
            return callback(err);
        }
        else if (result != null) {
            bcrypt.compare(usersDetails.password, result.password).then(function (res) {
                if (res) {
                    return callback(null, "login successful")
                }
                else {
                    return callback("login unsuccessful");
                }
            })
        }
        else {
            return callback(null, result);
        }
    })
}

userModel.prototype.forgotPassword = (usersDetails, callback) => {
    User.find({ "email": usersDetails.email }, (err, result) => {
        if (err) {
            return callback(err);
        }
        else if (result.length > 0) {
            return callback(null, "Take to reset password")
        }
        else {
            return callback(null, "Invalid email")
        }
    })
}

userModel.prototype.resetPassword = (usersDetails, callback) => {
    let newpassword = bcrypt.hashSync(usersDetails.password, saltRounds);
    User.updateOne({ _id: req.decoded.payload.user_id }, { password: newpassword }).then(function (res) {
        if (res) {
            return callback(null, "login successful")
        }
        else {
            return callback("login unsuccessful");
        }
    })
}
module.exports = new userModel();