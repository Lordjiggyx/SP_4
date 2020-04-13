//Requiring Mongoose
const mongoose = require("mongoose")

//Admin Scehema for customer fields
const AdminSchema = new mongoose.Schema(
    {
        Pasword:{
            type:String,
        },
        Email:{
            type:String,
            
        },
       
    }
)

//Creating a admin object based off of schema
let Admin = mongoose.model("Admin" , AdminSchema)

//Making object exportable
module.exports = Admin