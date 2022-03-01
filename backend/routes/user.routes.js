const express = require('express');
const controller = require('../controller/user.controller');

const router = express.Router();

router.get('/', controller.getAllusers);
router.get('/add', controller.addUser);
router.get('/update/:id', controller.editUser);
router.get('/delete/:id', controller.deleteUser);

module.exports = router;