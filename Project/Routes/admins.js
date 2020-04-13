//Bring in express and use router for REST calls
const express = require("express")
const router = express.Router()

//Bring in Customer model
const Admin = require("../Models/Admin")

//Test
router.get("/Admin/test" , (req , res)=>
{
    return "admin"
})

module.exports = router