//Bring in express and use router for REST calls
const express = require("express")
const router = express.Router()

//Bring in Item model
const Item = require("../Models/Item")

//Get all items - unsorted
router.get("/Items/unsorted" , (req , res)=>
{
    //finds all items
    Item.find()
    //callback to send items back in JSON Array
    .then(items => 
       {
        if(items.length==0)
        {
            return res.status(400).json({msg:`No Items in the database`})
        }
        else
        {
            res.json(items)
        }
       }
)})

module.exports = router