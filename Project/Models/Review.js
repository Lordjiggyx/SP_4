//Requiring Mongoose
const mongoose = require("mongoose")

//Customer Scehema for customer fields
const ReviewSchema = new mongoose.Schema(
    {
        ItemName:{
            type:String
        }
        ,
        Review:{
            type:String,
        },
        Rating:{
            type:Number,
            
        }
    }
)

//Creating a user object based off of schema
let Review = mongoose.model("Review" , ReviewSchema)

//Making object exportable
module.exports = Review