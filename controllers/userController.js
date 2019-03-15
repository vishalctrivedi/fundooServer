
import userServices from "../services/userServices";

export const loginController = (req, res) => {

    userServices.loginController(req.body, (err, result) => {
        if (err) {
            res.status(400).send({
                message: "User Registration not successful"
            });
        }
        else {
            res.status(200).send({
                message: "User Registration successful"
            });
        }
    })
}

export const registerController = (req, res) => {
    userServices.registerService(req.body, (err, result) => {
        if (err) {
            res.status(400).send({
                status: "unsuccessful",
                message: "User Registration not successful",
            });
        }
        else {
            res.status(200).send({
                message: "User Registration successful",
                status: "ok",
                token: result.token 
            });
        }
    })
}