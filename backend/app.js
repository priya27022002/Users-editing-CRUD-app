const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')




const url ='mongodb://127.0.0.1:27017'

const app=express()
app.use(cors())

mongoose.connect(url,{useNewUrlParser:true})
const con =mongoose.connection

con.on('open',()=>{
    console.log('it is connected...')
})
app.use(express.json())
const alienRouter=require('./routes/aliens')

app.use('/aliens',alienRouter)

app.listen(9000, ()=>{
    console.log('Server started')
})