
var nodeMailer = require('nodemailer');
var url = 'http://192.168.0.37:3000/resetPassword'

let transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'iamvishal96@gmail.com',
        pass: 'vishal@96'
    },
    tls: {
        rejectUnauthorized: false
    }
})

let HelperOptions = {
    from: '"FundooApp" <iamvishal96@gmail.com>',
    to: 'iamvishal96@gmail.com',
    subject: 'Reset Password',
    text: 'click the link to change the password http://192.168.0.37:3000/resetPassword'
}

transporter.sendMail(HelperOptions, (err, res) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(res)
    }
})

