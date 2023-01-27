const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set('strictQuery', false);

const connect = () => {
  return mongoose.connect(process.env.DB_URL);
};                  

module.exports = {connect}