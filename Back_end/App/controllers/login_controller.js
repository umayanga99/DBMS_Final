const LoginModel = require("../models/login_models");

// exports.loginInputValidation = 

// Check for validity of username and password
exports.checkValidity = (req, res, next) => {
    if(!req.body) {
        res.status(400).send({
            message: "Username and password can not be empty!"
        });
    }

    const email = req.body.email;
    const password = req.body.password;
    console.log(email,password);

    LoginModel.checkValidity(email, password, (err, data) => {
        if(err) {
            res.status(500).send({
                message: err.message || "Something went wrong"
            })
        } else {
            // Check passwrod
            // data -> password validation
            console.log(data);
            res.status(200).send({
                message: "Welcome"
                
            });
            
        }
        console.log(res);
    })
}