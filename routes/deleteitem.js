const express=require('express')
const itemsmodel = require('../models/itemsmodel')
const router=express.Router()


router.delete('/deleteitem/:id',async(req,res)=>{
    const objectid=req.params.id
    try {
        await itemsmodel.findByIdAndDelete(objectid)
        return res.json({Success:true})
    } catch (error) {
        console.error(error.message)
    }
})
module.exports=router