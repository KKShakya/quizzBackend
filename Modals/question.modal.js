const mongoose = require("mongoose");

const quesSchema = new mongoose.Schema(
  {
   
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    options:{
        type:Array,
        opt1:{
          type:String,
          required:true
        },
        opt2:{
          type:String,
          required:true
        },
        opt3:{
          type:String,
          required:true
        },
        opt4:{
          type:String,
          required:true
        }
    },
     
    level:{type:String,required:true,enum:["easy","medium","hard"]},
  },
  {
    versionKey: false,
  }
);

const Que = mongoose.model("que", quesSchema);

module.exports = Que;
// opt1: {
//   type: String,
//   required: true,