const express=require('express');
const Rimagerouter=require('./Rimage.js');
const app=express();
app.use(Rimagerouter);
app.listen(7894,()=>console.log("server running on port 7894"));