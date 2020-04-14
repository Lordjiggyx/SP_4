//Requiring Mongoose
const mongoose = require("mongoose")

//Customer Scehema for customer fields
const poScehma = new mongoose.Schema(
    {
        Date:{
            type:String,
        },
        Email:{
            type:String,
            
        }
    }
)

//Creating a user object based off of schema
let PO = mongoose.model("PO" , poScehma)

//Making object exportable
module.exports = PO