
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./Routes/user.route");
require('dotenv').config();
const app = express();
const port  = process.env.PORT || 8080;


const connect = async () => {
  return mongoose.connect(process.env.DB_URL);
};

app.use(express.json());
app.use(cors());


app.use("/user",userRouter)

app.get("/",(req,res)=>{
  res.send("Welcome to QUiz app")
})



app.listen(port,async ()=>{
  try {
    await connect();
    console.log(`Server is running on port ${port}`)
  } catch (err) {
    console.log(err)
  }
})

