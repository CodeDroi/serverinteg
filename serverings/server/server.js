const express = require('express') //allows usage of express library/commands

const app = express() // connecting your app while using express commands
const {faker} = require('@faker-js/faker');

let connection = 8080
app.listen(connection, ()=>{
    console.log(`Server is running at http://localhost:${connection}`) //this will simply indicate if the server is up and running
})

const greetings = ["Hello", "Hi", "Kumusta"]
app.get("/api/tryserver",(req,res) => { //initial
    res.json({
        message:"hello world",
        greetings
    })
})


// let gender = "Male"
//faker api testing
app.get("/api/showperson", (req, res) => {
    res.json({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.imei(),
        gender: faker.person.gender()
    })
})

