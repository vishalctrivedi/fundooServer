const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const saltRounds = 1;

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
}, {
        timestamps: true
    });


const User = mongoose.model('User', UserSchema);

function userModel() { }

function hash(password) {
    var hash = bcrypt.hashSync(password, saltRounds);
    return hash;
}

userModel.prototype.register = (usersDetails, callback) => {
    User.find({"email":usersDetails.email}, (err, data) => {
    
        if (err) {
            callback("Error in registration")
        }
        else if(data.length > 0)
        {
            callback("email already exits");
            
        }
        else 
        {
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
                    return callback(null, result);
                }
            })
        }
    })
}

userModel.prototype.login = (usersDetails, callback) => {
    User.find(usersDetails.email, (err, result) => {
        if (err) {
            return callback(err);
        }
        else if (err) {
            return callback(null, result);
        }
    })
}

module.exports = new userModel();