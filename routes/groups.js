const express=require('express')
const groups = require('../models/groupsmodel')
const router=express.Router()


router.post('/groups',async(req,res)=>{
    try {
        await groups.create({
            name:req.body.name,
            admin:req.body.admin,
            imageurl:req.body.imageurl,
            groupactive:true
        })
        return res.json({success:true})
    } catch (error) {
        console.error(error.message)
        return res.json({success:false})
    }
})
module.exports=router