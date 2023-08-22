const express=require('express')
const router=express.Router()
const groupsmodel = require('../models/groupsmodel')


router.patch('/updatestatus/:id',async(req,res)=>{
    const objectid=req.params.id
    const updateddata=req.body
    try {
        await groupsmodel.findByIdAndUpdate(
            objectid,
            {$set:updateddata},
            {new:true}
        )
        return res.json({success:true})
    } catch (error) {
        console.error(error.message)
        return res.json({success:false})
    }
})
module.exports=router