const express=require('express');
const Rimagerouter=express.Router();

const URL="https://picsum.photos/200/300"
const randomimageapi=async()=>{
    const res=await fetch(URL)
    // const data=await res.json()
    // console.log(res.url)
    return res.url
    // console.log(data)
}



Rimagerouter.get('/Rimage',(req,res)=>{
 randomimageapi().then((url)=>
  
    res.status(200).json({status:'success',url:url,date:new Date()})
)

})
module.exports=Rimagerouter