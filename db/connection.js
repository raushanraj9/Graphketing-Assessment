const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/electrician_allocation_system").then(()=>{
    console.log("Db connected successfully");
}).catch((e)=>{
    console.log(e);
})