const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set('strictQuery', false);

const mongoUrl = process.env.DB_URL;
console.log( mongoUrl);
const connection  = mongoose.connect(mongoUrl)             

module.exports = {connection}