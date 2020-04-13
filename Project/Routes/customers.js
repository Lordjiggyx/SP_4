//Bring in express and use router for REST calls
const express = require("express")
const router = express.Router()

//Bring in Customer model
const Customer = require("../Models/Customer")

//Test
router.get("/Customer/test" , (req , res)=>
{
    return res.json("customer")
})

module.exports = router