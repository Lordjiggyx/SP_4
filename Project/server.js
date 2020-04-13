//Required dependencies
const express = require("express")
const mongoose = require("mongoose")

//Routes
const Items = require("./Routes/items")
const Customers = require("./Routes/customers")
const Admins = require("./Routes/admins")
const Reviews = require("./Routes/reviews")


//Initialise express
const app = express()

//Body Parser MiddleWare
app.use(express.json())

//Creating Database variable
const db = require("./config/Keys").MongoUrl;

//Connecting to database
mongoose
.connect(db , {useNewUrlParser:true ,useCreateIndex:true ,useUnifiedTopology:true})
.then(()=> console.log("Connected To Database..."))
.catch(err => console.log(err))

//Create a port Variable
const port = process.env.PORT || 8000

app.use("/", Items)
app.use("/", Customers)
app.use("/", Reviews)
app.use("/", Admins)

//app.listen() used ot start the server
app.listen(port , ()=>
{
    console.log(`Server started on port ${port}`)
   
})



