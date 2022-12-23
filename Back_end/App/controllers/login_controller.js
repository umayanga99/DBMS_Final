const LoginModel = require("../models/login_models");

// Check for validity of username and password
exports.checkValidity = (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Username and password can not be empty!"
        });
    }

    const userName = req.body.userName;
    const password = req.body.password;

    LoginModel.checkValidity(userName, password, (err, data) => {
        if(err) {
            res.status(500).send({
                message: err.message || "Something went wrong"
            })
        } else {
            res.status(200).send({
                message: "Welcome"
            });
        }
    })
}