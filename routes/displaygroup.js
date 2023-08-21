const express=require('express')
const router=express.Router()

router.post('/displaygroup',(req,res)=>{
    try {
        res.send([global.datagroups])
    } catch (error) {
        console.error(error.message)
        return res.json({success:false})
    }
})
module.exports=router