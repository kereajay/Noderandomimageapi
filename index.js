const express=require('express');
const Rimagerouter=require('./Rimage.js');
const app=express();
app.use(Rimagerouter);
app.get('/',(req,res)=>{
    res.json({status:'success',date:new Date(),message:'Welcome to Random Image Generator API',forRandomimage:"https://noderandomimageapi-1.onrender.com/Rimage"})
    
})
app.listen(7894,()=>console.log("server running on port 7894"));