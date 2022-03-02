const express = require('express');
const controller = require('../controller/user.controller');

const router = express.Router();

router.get('/', controller.getAllusers);
router.get('/:id', controller.findUser);
router.post('/add', controller.addUser);
router.put('/update/:id', controller.editUser);
router.delete('/delete/:id', controller.deleteUser);

module.exports = router;