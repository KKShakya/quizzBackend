const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
   
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    options:[
      {
        opt1: {
          type: String,
          required: true,
        },
        opt2: {
          type: String,
          required: true,
        },
        opt3: {
          type: String,
          required: true,
        },
        opt4: {
          type: String,
          required: true,
        },
        
      }
    ]
  },
  {
    versionKey: false,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;