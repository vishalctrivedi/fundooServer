const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
}, {
        timestamps: true
    });


const User = mongoose.model('User', UserSchema);

// module.exports=mongoose.model(User,UserSchema)

function modelsCon() { }

modelsCon.prototype.saveUserDetails = (userData, callback) => {

    // let newUserData = new User({
    //     name: "ABC",
    //     email: "abc@xyz.com",
    //     password: "abc"
    // })

    let newUserData = new User({
        name: userData.name,
        email: userData.email,
        password: userData.password
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

modelsCon.prototype.findUser = (userDetails, callback) => {
    User.find(userDetails.email, (err, result) => {
        if(err)
        {
            return callback(err);
        }
        else
        {
            return callback(null, result);
        }
    })
}

module.exports = new modelsCon();