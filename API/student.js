const mongoose = require("mongoose")
const validator = require("validator")

const studentnSchema = new mongoose.Schema({
  name : {
      type: String,
      require: true,
      minlength: 3
  },
  email: {
      type: String,
      require: true,
      unique: [true, 'Email is already present.'],
      validator(val){
        if( ! validator.isEmail(val)){
          throw new Error("Invalid Email")
        }
      }
  },
  phone : {
    type: Number,
    require: true,
    minlength: 10,
    maxlength: 10,
    unique: true
  }
})

//create new collection using model
const Student = new mongoose.model("Student", studentnSchema)

//export the collection from here
module.exports = Student;