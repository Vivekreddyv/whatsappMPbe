const mongoose=require('mongoose')
const {Schema}=mongoose


const GroupSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    admin:{
        type:String,
        required:true
    },
    imageurl:{
        type:String
    },
    groupactive:{
        type:Boolean,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model('groupdata',GroupSchema)