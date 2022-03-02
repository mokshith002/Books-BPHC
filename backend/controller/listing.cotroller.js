let Listing = require('../models/listing.model')

exports.getAllListings = (req, res) => {
    Listing.find()
        .then((listings) => res.send(listings))
        .catch(err => res.send({ message: err.message || "Error retrieving listings" }));
}

exports.addListing = (req, res) => {

    if (!req.body) {
        res.status(400).send({ message: "Cannot be empty!" });
        return;
    }

    const { title, sellerId, branches, courses, price } = req.body;

    const newListing = new Listing({
        title,
        sellerId,
        branches,
        courses,
        price
    });

    newListing.save(newListing)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({
            message: err.message || "Error adding Listing"
        }));
}

exports.findListing = (req, res) => {
    const id = req.params.id;
    Listing.findById(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "This listing cannot be found" });

            } else {
                res.send(data);
            }
        })
        .catch(err => res.status(500).send({
            message: err.message || "Error while retrieving listing"
        }))
}

exports.editListing = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Cannot be empty" });
        return;
    }

    const id = req.params.id;
    Listing.findByIdAndUpdate(id, req.body, {
            useFindAndModify: false
        })
        .then((data) => {
            if (!data) {
                res.status(400).send({ message: "Cannot update listing maybe listing is not found" })
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

exports.deleteListing = (req, res) => {
    const id = req.params.id;
    Listing.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "Cannot delete this listing" })
            } else {
                res.send(data);
            }
        })
        .catch(err => res.status(500).send({
            message: err.message || "Error occurred while deleting this listing"
        }))
}