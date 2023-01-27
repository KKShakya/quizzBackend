const express = require("express");
const jwt = require('jsonwebtoken');

const userRouter = express.Router();
const User = require("../Modals/user.modal.js");
require('dotenv').config();

const hashKey = process.env.SECRET_KEY;
console.log(hashKey)

//get users
userRouter.get("/", async (req, res) => {
  try {
    const user = await User.find();
    return res.status(200).send({ success: true, user });
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
});

//Register User
userRouter.post("/new", async (req, res) => {
  try {
    const { email } = req.body;
    const getUser = await User.findOne({ email });
    if (getUser) {
      return res.send({ message: "User already exists" });
    }
    const user = await User.create(req.body);
 
    return res.status(201).send({ message: "user registered successfully", user });
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
});

//User login
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.send({ message: "User does not exist" });
    }
    if (user.password != password) {
      return res.send({ message: "Password is incorrect" });
    }
    //token generation
    const token = jwt.sign({ "userID": user._id }, hashKey, {
      expiresIn:"2h",
    });

    return res.status(200).send({ message: "Login successful",token, user });
  } catch (error) {
    console.log(error)
    return res.send({ message: "Something went wrong" });
  }
});



//get users details
userRouter.get("/details", async (req, res) => {
  try {
    const user = await User.findById(req.query.id);
    return res.status(200).send({ success: true, user });
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
});





module.exports = userRouter;
