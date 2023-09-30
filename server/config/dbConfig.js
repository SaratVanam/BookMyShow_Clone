const mongoose = require("mongoose");


mongoose.connect(process.env.mongo_url)
.then(()=>{
    console.log("connection is established")
}).catch((error)=>{
    console.log(error);
})