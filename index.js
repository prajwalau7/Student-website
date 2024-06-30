const express=require('express');
const mongoose=require('mongoose');
const port=process.env.PORT||3000;
const app=express();
app.use(express.json());

mongoose.connect('mongodb://localhost/RishiAnna')
.then(()=>console.log("connected to DB"))
.catch((err)=>{
    console.log("Error while connecting",err)
})



app.use(require('./controller/student'));

app.listen(port,()=>{
    console.log(`Listening on port number ${port}`)
})