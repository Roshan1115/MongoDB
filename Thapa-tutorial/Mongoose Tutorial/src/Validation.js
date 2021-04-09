const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/RoshanMONGOOSE",{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected Successfully............"))
.catch( e => console.log(e))


// We neet to define the validation inside the schema
const playlistSchema = new mongoose.Schema({
  Name : {
      type: String,

      //validation ;-

      require: true,
      // lowercase: true,
      // trim: true
      // minlength: 20
      
  },
  Singer : {
      type: String,

      // validation:- 
      require: true,
      enum: ['Annie Marrie', 'Shelena']

  },
  Duration : {
      type: Number,
      require: true
  },
  Date : {
      type: Date,
      default : Date.now
  },
  Active : Boolean
})

const Playlist = new mongoose.model("Playlist", playlistSchema)

//let try to insert document wtth validation applied
const example_insert = new Playlist({
    // Name : 'BeautifuLLLLLLL',
    // Name : '    BeautifuLLLLLLL              '  ,
    // Name : 'BeautifuLLLLLLL',     //it will thrw err

    // Singer : "Shelena",
    // Singer : "khalid",    //Thrw err

    Duration : 4.2,
    Active : false
})
// example_insert.save()
// .then(() => console.log("saved"))
// .catch(e => console.log(e))