const ManagerModel = require("../models/manager_models");

// Check for validity of username and password
// exports.checkValidity = (req, res) => {
//     if(!req.body) {
//         res.status(400).send({
//             message: "Username and password can not be empty!"
//         });
//     }

//     const email = req.body.email;
//     const password = req.body.password;
//     console.log(userName,password);

//     LoginModel.checkValidity(email, password, (err, data) => {
//         if(err) {
//             res.status(500).send({
//                 message: err.message || "Something went wrong"
//             })
//         } else {
//             res.status(200).send({
//                 message: "Welcome"
                
//             });
            
//         }
//         console.log(res);
//     })
// }