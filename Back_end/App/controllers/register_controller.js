const RegisterModel = require("../models/register_models");

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

    RegisterModel.addUser(name, password, email, type, TP, (err, data) => {
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