//Requiring Mongoose
const mongoose = require("mongoose")

//Customer Scehema for customer fields
const ItemSchema = new mongoose.Schema(
    {
        Title:{
            type:String,
        },
        Manufact:{
            type:String,
            
        },
        Price:
        {
            type:Number,
        },
        Category:
        {
            type:String,
        },
        ImageLink:
        {
            type:String,
        },
        Stock:
        {
            type:Number
        }
    }
)

//Creating a user object based off of schema
let Item = mongoose.model("Item" , ItemSchema)

//Making object exportable
module.exports = Item