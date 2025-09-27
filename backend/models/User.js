const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    name: String,
    age: Number,
    email: String,

})

const UserModel = new mongoose.model("tableones", UserSchema)

module.exports = UserModel
