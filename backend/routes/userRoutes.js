const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

    router.get('/getUsers', userController.getUsers);
    router.delete('/deleteUsers/:id', userController.deleteUser)
    router.post('/createUsers', userController.createUser)
    router.post('/updateUsers/:id', userController.updateUser)

module.exports = router;


