//Bring in express and use router for REST calls
const express = require("express")
const router = express.Router()

//Bring in Customer model
const Customer = require("../Models/Customer")
const Item = require("../Models/Item")
const po = require("../Models/po")
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


router.post("/Customer/buyItems/:email" , (req , res)=>
{
    req.body.cart.forEach(element => {
        Item.findOne({Title:element.Title})
        .then(item =>{
            item.Stock = item.Stock - 1
            item.save()
        

          

        }
            )
            
    });
    const d = new Date();
    let year = d.getFullYear();
    let month = (1 + d.getMonth()).toString().padStart(2, '0');
    let day = d.getDate().toString().padStart(2, '0');

    const date = `${day}/${month}/${year}`
    const pos = new po()
    pos.Date = date
    pos.Email = req.params.email
    pos.save()
    
})



module.exports = router