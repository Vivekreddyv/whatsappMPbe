const mongoose=require('mongoose')
const {Schema}=mongoose

const ItemsSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    seller:{
        type:String,
        required:true
    },
    group:{
        type:String,
        required:true
    },
    imageurl:{
        type:String,
        required:true
    },
    classname:{
        type:String,
        required:true
    },
    listeddate:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model('items',ItemsSchema)