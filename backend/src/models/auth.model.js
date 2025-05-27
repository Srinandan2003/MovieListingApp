import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {type:String, trim:true},
  password: {type:String},
  email:{type:String, trim:true}

});

const User = mongoose.model("users",userSchema);


export default User

