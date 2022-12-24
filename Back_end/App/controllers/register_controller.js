const LoginModel = require("../models/register_models");

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
    const role = req.body.role;
    const id = req.body.id;

    LoginModel.addUser(name, password, email, type, role, id, (err, data) => {
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