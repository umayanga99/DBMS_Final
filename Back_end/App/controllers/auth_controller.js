const AuthModel = require("../models/auth_models");

// Check for validity of username and password
exports.checkValidity = (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Username and password can not be empty!"
        });
    }

    const email = req.body.email;
    const password = req.body.password;
    console.log(email,password);

    AuthModel.checkValidity(email, password, (err, data) => {
        if(err) {
            res.status(500).send({
                message: err.message || "Something went wrong"
            })
        } else {
            res.status(200).send({
                message: "Welcome"
                
            });
            
        }
        console.log("result is: ",res);
    })
}

exports.addUser = (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "values can not be empty!"
        });
    }

    const name = req.body.name;
    const password = req.body.password;
    const email = req.body.email;
    const type = req.body.type;
    const TP = req.body.TP;

    AuthModel.addUser(name, password, email, type, TP, (err, data) => {
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