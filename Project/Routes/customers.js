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

router.post("/Customer/register" , (req , res)=>
{
    

    const newUser = new Customer()
    {
        newUser.Email = req.body.email
        newUser.Password = req.body.password
        newUser.Payment = req.body.pay
        newUser.Shipping = req.body.shipping
    }

    newUser.save()


    
})

module.exports = router