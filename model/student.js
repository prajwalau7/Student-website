const mongoose=require('mongoose');

const studentSchema=new mongoose.Schema({
    name:String,
    sId:Number,
    gender:{
        type:String,
        enum:["male","female","others"]
    },
    address:{
        city:String,
        area:String
    }
})

module.exports=mongoose.model("Student",studentSchema);