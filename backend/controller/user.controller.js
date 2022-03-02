let User = require('../models/user.model')

exports.getAllusers = (req, res) => {
    User.find()
        .then(users => res.send(users))
        .catch(err => res.status(400).send({
            message: err.message || "Error retrieving users"
        }))
}

exports.addUser = (req, res) => {

    if (!req.body) {
        res.status(400).send({ message: "Cannot be empty!" });
        return;
    }

    const { email, phone, address } = req.body;

    const newUser = new User({
        email,
        phone,
        role: "User",
        address
    });

    newUser.save()
        .then((data) => res.send(data))
        .catch(err => res.status(400).send({ message: err.message || "Error adding User" }));
}

exports.findUser = (req, res) => {
    const id = req.params.id;
    User.findById(id)
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    message: "User not found"
                })
            } else {
                res.send(data);
            }
        })
        .catch(err => res.status(500).send({
            message: err.message || "Error occurred when finding for user"
        }));
}

exports.editUser = (req, res) => {

    if (!req.body) {
        res.status(400).send({ message: "Cannot be empty" });
        return;
    }

    const id = req.params.id;
    User.findByIdAndUpdate(id, req.body, {
            useFindAndModify: false
        })
        .then((data) => {
            if (!data) {
                res.status(400).send({ message: "Cannot update user maybe user is not found" })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error updating user"
            })
        })
}

exports.deleteUser = (req, res) => {
    const id = req.params.id;

    User.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "Cannot delete this user" })
            } else {
                res.send(data);
            }
        })
        .catch(err => res.status(500).send({
            message: err.message || "Error occurred while deleting this user"
        }))
}