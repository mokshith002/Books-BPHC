let User = require('../models/user.model')
const bcrypt = require('bcrypt')

exports.getAllusers = async (req, res) => {
    User.find()
        .then(users => res.send(users))
        .catch(err => res.status(400).send({
            message: err.message || "Error retrieving users"
        }))
}

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
      const oldUser = await User.findOne({ email });
  
      if (!oldUser) return res.status(200).json({ success: false });
  
      const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
  
      if (!isPasswordCorrect) return res.status(200).json({ success: false });
      res.status(200).send({success: true, userID: oldUser._id});
    } catch (err) {
        console.log(err);
      res.status(500).json({ message: "Something went wrong" });
    }
}

exports.register = async (req, res) => {

    if (!req.body) {
        res.status(400).send({ message: "Cannot be empty!" });
        return;
    }

    const { email, name, phone, address, password } = req.body;

    let oldUser = null;

    await User.findOne({email})
        .then(data => {
            oldUser = data;
        });

    if(oldUser){
        return  res.status(200).send({success: false, message: "User already exists!"});
    }

    const hashedPassword = await bcrypt.hash(password, 12);


    const newUser = new User({
        email,
        name,
        phone,
        role: "User",
        address,
        password: hashedPassword,
        flagged: false
    });

    newUser.save()
        .then((data) => {
            // console.log(data);
            return res.send({...data,success:true});
        })
        .catch(err => {
            console.log(err);
            return res.status(500).send({ message: err.message || "Error adding User" })
        });
}

exports.findUser = async (req, res) => {
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

exports.editUser = async (req, res) => {

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

exports.deleteUser = async (req, res) => {
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

