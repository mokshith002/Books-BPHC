let User = require('../models/user.model')

export const getAllusers = (req, res) => {
    User.find()
        .then(users => res.send(users))
        .catch(err => res.status(400).send({
            message: err.message || "Error retrieving users"
        }))
}

export const addUser = (req, res) => {

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

export const editUser = (req, res) => {
    const id = req.params.id;
    const { email, phone, address } = req.body;
    User.findById(id)
        .then(user => {
            user = {
                ...user,
                email,
                phone,
                address
            };
            user.save()
                .then((data) => res.send(data))
                .catch(err => res.status(400).send({ message: err.message || "Error editing user" }))
        })
        .catch(err => res.status(400).send({
            message: err.message || "Error finding user"
        }))
}

export const deleteUser = (req, res) => {
    const id = req.params.id;

    User.findByIdAndDelete(id)
        .then((data) => res.send(data))
        .catch(err => res.status(400).send({ message: err.message || "Error deleting user" }));
}