const express=require('express')
const router=express.Router()

router.post('/displayitems',(req,res)=>{
    try {
        res.send([global.dataitems])
    } catch (error) {
        console.error(error.message)
        return res.json({success:false})
    }
})
module.exports=router