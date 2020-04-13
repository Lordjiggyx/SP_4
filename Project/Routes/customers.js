//Bring in express and use router for REST calls
const express = require("express")
const router = express.Router()

//Bring in Customer model
const Customer = require("../Models/Customer")

//Test
router.get("/Customers/test" , (req , res)=>
{
    return "customer"
})

module.exports = router