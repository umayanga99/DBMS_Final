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
                message: 0 
            })
        } else {
            res.status(200).send({
                message: data ? 1 : 0,
                email:email
                
            });
            
        }
     
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

    AuthModel.addUser(email,password,name, type, TP, (err, data) => {
        if(err) {
            console.log(err);
            res.status(500).send({
                message: err.message || "Something went wrong"
            })
        } else {
            res.status(200).send({
                message: data
            });
        }
    })
}