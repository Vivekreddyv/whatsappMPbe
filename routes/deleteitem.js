const express=require('express')
const itemsmodel = require('../models/itemsmodel')
const router=express.Router()


router.delete('/deleteitem/:id',async(req,res)=>{
    try {
        const objectid=req.params.id
        await itemsmodel.findByIdAndDelete(objectid)
        return res.send({Success:true})
    } catch (error) {
        console.error(error.message)
        return res.send({success:false})
    }
})
module.exports=router