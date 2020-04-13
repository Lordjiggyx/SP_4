//Required dependencies
const express = require("express")
const mongoose = require("mongoose")


//Initialise express
const app = express()

//Creating Database variable
const db = require("./config/Keys").MongoUrl;

//Connecting to database
mongoose
.connect(db , {useNewUrlParser:true ,useCreateIndex:true ,useUnifiedTopology:true})
.then(()=> console.log("Connected To Database..."))
.catch(err => console.log(err))

//Create a port Variable
const port = process.env.PORT || 8000

//app.listen() used ot start the server
app.listen(port , ()=>
{
    console.log(`Server started on port ${port}`)
   
})
