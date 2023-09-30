const express = require("express");

const app = express();

const PORT = 8020;
require("dotenv").config()
const dbConfig = require("./config/dbConfig")
const userModel = require("./models/userModel")
const userRoute = require("./routes/userRoute");
const cors = require("cors");

app.use(cors()); // cross origin resurce sharing enabled
app.use(express.json());
app.use("/",userRoute);

// app.get("/",(req,res)=>{
//     res.send("Hello");
// })

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})