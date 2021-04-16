const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")    //for hashing


const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: {
    type: String,
    minlength: 8
  },
  confirmPassword:{
    type:String,
    minlength: 8
  }
})

// using schemaName.pre(event, function)
//it will work before the evnnt
UserSchema.pre("save", async function(next){

  //if only password field of 'this' is modified
  if(this.isModified("password")){
    // Hasihomg password
    this.password = await bcrypt.hash(this.password, 10)
    this.confirmPassword = undefined;
  }
  // it is necessary to give next statement elseit will go on loading forever and the rest of code written afer it will not work.
  next();

})




const userCollecion = new mongoose.model("User_Data", UserSchema)

module.exports = userCollecion;