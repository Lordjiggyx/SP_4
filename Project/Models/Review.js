//Requiring Mongoose
const mongoose = require("mongoose")

//Customer Scehema for customer fields
const ReviewSchema = new mongoose.Schema(
    {
        ItemId:{
            type: mongoose.Schema.Types.ObjectId,
            ref = 'items'
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
let Review = mongoose.model("Custoomer" , ReviewSchema)

//Making object exportable
module.exports = Review