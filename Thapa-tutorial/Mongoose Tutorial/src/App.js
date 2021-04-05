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

//Creaete Collection
const Playlist = new mongoose.model("Playlist", playlistSchema)


// .................................................................. 
//Create or insert document inside collection

// const Song_1 = new Playlist({
//     Name : 'Memories',
//     Singer : "Maroon 5",
//     Duration : 5,
//     Active : true
// })
// .save() also returns a promise
// Song_1.save();
//.....................................................................


// Instead of using promise the mordern technique ueses async await methode and below is the code for that
const createDocument = async () => {
    try{
        const Song_1 = new Playlist({
            Name : 'Memories',
            Singer : "Maroon 5",
            Duration : 5,
            Active : true
        })

        const result = await Song_1.save();
        console.log(result);
    } 
    catch(err){
        console.log(err);
    }
}
createDocument();