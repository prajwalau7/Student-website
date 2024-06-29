const studentSchema=require('../model/student');
const express=require('express');
const router=express.Router();

router.post('/studentlist',async (req,res)=>{
    try {
        const {name,sId,gender,address}=req.body;

        const studentlist=new studentSchema({
            name,sId,gender,address
        })

        await studentlist.save();
        return res.status(201).json({msg:"Student list added",studentlist})

    } catch (error) {
        console.log("error while post method",error);
        return res.status(400).json({msg:"Error while creating student",error})
    }
})

module.exports=router;