const express=require('express')
const app=express()
const PORT=5000
const mongodb=require('./database.js')
const cors=require('cors')
mongodb()

app.get('/',(req,res)=>{
    res.send('hii')
})

app.use(express.json())
app.use(cors())
app.use('/api',require('./routes/groups.js'))
app.use('/api',require('./routes/itemsdata.js'))
app.use('/api',require('./routes/displaygroup.js'))
app.use('/api',require('./routes/displayitems.js'))

app.listen(PORT,()=>{
    console.log(`server is listening to ${PORT}`)
})