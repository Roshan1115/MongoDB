const mongoose = require("mongoose")

//Mongoose.connect() return a promises
mongoose.connect("mongodb://localhost:27017/RoshanMONGOOSE",{ useNewUrlParser: true, useUnifiedTopology: true })
.then( () => console.log("Connected Successfully...."))
.catch( err => console.log(err))


//Shema defines the structure of the document
// playlistSchema is a object
const playlistSchema = new mongoose.Schema({
    Name : {
        type: String,
        require: true
    },
    Singer : {
        type: String,
        require: true
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

// a Mongoose model is a wrapper for the mongoose schema

//create a class playlist below and this will be the collection named after an additional "s" by default
const Playlist = new mongoose.model("Playlist", playlistSchema)
