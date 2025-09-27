const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes')
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/test")
app.use('/api', userRoutes)

let connection = 8080 // initialize your local connection here
app.listen(connection, () => {
    console.log(`Server is up and running at ${connection}`)
})


