const mongoose=require('mongoose')
const mongodbURL="mongodb+srv://saivivek1414:whatsappmarketplace8797@cluster0.33wvkjc.mongodb.net/whatsapp?retryWrites=true&w=majority"


const mongodb=async()=>{
    try {
        await mongoose.connect(mongodbURL)
        console.log('db connected')
        const groupsdata=mongoose.connection.db.collection("groupdatas")
        const itemsdata=mongoose.connection.db.collection("items")
        const fetcheddata1=await groupsdata.find({}).toArray()
        const fetcheddata2=await itemsdata.find({}).toArray()
        global.datagroups=fetcheddata1
        global.dataitems=fetcheddata2


        groupsdata.watch().on('change',async(change)=>{
            if(change.operationType==='insert'|| change.operationType==='update'){
                const updateddata1=await groupsdata.find({}).toArray()
                global.datagroups=updateddata1
            }
        })
        itemsdata.watch().on('change',async(change)=>{
            if(change.operationType==='insert'|| change.operationType==='update'){
                const updateddata2=await itemsdata.find({}).toArray()
                global.dataitems=updateddata2
            }
        })
    } catch (error) {
        console.error(error.message)
    }
   
    
}
module.exports=mongodb