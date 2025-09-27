const UserModel = require('../models/User');

const getUsers = (req, res) => {
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    });
};

module.exports = {getUsers};