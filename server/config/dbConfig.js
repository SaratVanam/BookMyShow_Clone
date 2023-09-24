const mongoose = require("mongoose");


mongoose.connect(process.env.mongo_url)
.then(()=>{
    console.log("connectio is established")
}).catch((error)=>{
    console.log(error);
})