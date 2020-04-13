//Requiring Mongoose
const mongoose = require("mongoose")

//Customer Scehema for customer fields
const CustomerSchema = new mongoose.Schema(
    {
        Password:{
            type:String,
        },
        Email:{
            type:String,
            
        },
        Shipping:
        {
            type:String,
        },
        Payment:
        {
            type:String,
        },
    }
)

//Creating a user object based off of schema
let Customer = mongoose.model("Customer" , CustomerSchema)

//Making object exportable
module.exports = Customer