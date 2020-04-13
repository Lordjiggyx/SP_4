//Bring in express and use router for REST calls
const express = require("express")
const router = express.Router()

//Bring in Customer model
const Review = require("../Models/Review")

//Test
router.get("/Review/test" , (req , res)=>
{
    return res.json("review")
})

module.exports = router