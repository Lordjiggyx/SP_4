//Bring in express and use router for REST calls
const express = require("express")
const router = express.Router()

//Bring in Admin model
const Admin = require("../Models/Admin")
const Item = require("../Models/Item")

//Test
router.get("/Admin/test" , (req , res)=>
{
    return res.json("admin")
})

router.post("/Admin/login" , (req , res)=>
{
    console.log(req.body.user)

    const {email , password} = req.body.user

    Admin.findOne({Email:email})
    .then(a =>
        {  console.log(a)
            if(!a)
            {
                 res.json({msg:"User Does Not Exist"})
            }
            else if(a.Password  == password)
            {
                const success =
                {
                    user:a,
                    msg:"success"
                }
                res.json(success)
            }
           else  if(a.Password  != password)
            {
                
                 res.json({msg:"Incorrect Password"})
            }
        }
    )
    
})


router.post("/Admin/RemoveStock" , (req , res)=>
{
    Item.findOne({Title:req.body.Item.Title})
    .then(item =>
        {
            item.Stock = item.Stock - req.body.Item.Q
            item.save()
           
        })
})


router.post("/Admin/AddStock" , (req , res)=>
{
    Item.findOne({Title:req.body.Item.Title})
    .then(item =>
        {
            item.Stock = item.Stock + parseFloat(req.body.Item.Q)
            item.save()
          
        })
})


module.exports = router