const mongoose=require('mongoose')
const schema=mongoose.Schema

const alienSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    tech:{
        type:String,
        required:true
    }
    

    },{
        timestamps:true
    }
)
module.exports=mongoose.model('Alien',alienSchema)