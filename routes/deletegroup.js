const express=require('express')
const groupsmodel = require('../models/groupsmodel')
const router=express.Router()

router.delete('/deletegroup/:id',async(req,res)=>{
    try {
        const objectid=req.params.id
        await groupsmodel.findByIdAndDelete(objectid)
        return res.send({success:true})
    } catch (error) {
        console.error(error.message)
        return res.send({success:false})
    }
})
module.exports=router