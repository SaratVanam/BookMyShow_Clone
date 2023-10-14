const express = require("express");

const app = express();

const PORT = 8020;
require("dotenv").config()
const dbConfig = require("./config/dbConfig")
// const userModel = require("./models/userModel")
const userRoute = require("./routes/userRoute");
const movieRoute = require("./routes/movieRoute");
const theatreRoute = require("./routes/theatreRoute");
const bookingRoute = require("./routes/bookingRoute");
const cors = require("cors");

app.use(cors()); // cross origin resurce sharing enabled
app.use(express.json());
app.use("/api/users",userRoute);
app.use("/api/movies",movieRoute);
app.use("/api/theatres",theatreRoute);
app.use("/api/bookings",bookingRoute);

// app.get("/",(req,res)=>{
//     res.send("Hello");
// })

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})