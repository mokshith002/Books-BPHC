const express = require('express');
const controller = require('../controller/listing.cotroller')

const router = express.Router();

router.get('/', controller.getAllListings);
router.get('/:id', controller.findListing);
router.post('/add', controller.addListing);
router.put('/update/:id', controller.editListing);
router.delete('/delete/:id', controller.deleteListing);

module.exports = router;