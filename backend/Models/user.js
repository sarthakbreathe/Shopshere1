const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  phone: {
    type: Number,
    required: true,
    unique:true
  },
  role: {
    type: String,
    enum:['admin','user'],
    default:'user'
  },
  password: {
    type: String,
    required: true,
  },
  
  // profilepicture: {
  //   type: String, 
  //   default:" "
  // },
//   profile: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'profile',  
//   },
//   employee: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'employee',  
//   }
},
{timestamps:true}
);

const User=mongoose.model("user",userSchema)
module.exports =User;