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

router.post("/Customer/login" , (req , res)=>
{
    console.log(req.body.user)

    const {email , password} = req.body.user

    Customer.findOne({Email:email})
    .then(c =>
        {

           
            if(!c)
            {
                 res.json({msg:"User Does Not Exist"})
            }
            else if(c.Password  == password)
            {
                const success =
                {
                    user:c,
                    msg:"success"
                }
                res.json(success)
            }
           else  if(c.Password  != password)
            {
                
                 res.json({msg:"Incorrect Password"})
            }
        }
    )
    
})

module.exports = router