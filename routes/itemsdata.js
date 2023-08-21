const express=require('express')
const itemsmodel = require('../models/itemsmodel')
const router=express.Router()

router.post('/itemsdata',async(req,res)=>{
    try {
        const{name,description,price,seller,group,imageurl,classname}=req.body
        await itemsmodel.create({
            name:name,
            description:description,
            price:price,
            seller:seller,
            group:group,
            imageurl:imageurl,
            classname:classname,
        })
        return res.json({success:true})
    } catch (error) {
        console.error(error.message)
        return res.json({success:false})
    }
})



module.exports=router