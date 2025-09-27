const express = require('express') //allows usage of express library/commands
const app = express() // connecting your app while using express commands
const {faker} = require('@faker-js/faker');

app.listen(8080, ()=>{
    console.log(`Server is running at http://localhost:8080`) //this will simply indicate if the server is up and running
})

const greetings = ["Hello", "Hi", "Kumusta"]
app.get("/api/tryserver",(req,res) => { //initial
    res.json({
        message:"hello world",
        greetings: greetings
    })
})

app.get("/api/showperson", (req, res) => {
    res.json({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.imei()
    })
})

