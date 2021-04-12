const mongoose = require("mongoose")

//Mongoose.connect() return a promises
mongoose.connect("mongodb://localhost:27017/RoshanMONGOOSE",{ useNewUrlParser: true, useUnifiedTopology: true })
.then( () => console.log("Connected Successfully...."))
.catch( err => console.log(err))


//....................................................................
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
//....................................................................



//....................................................................
// a Mongoose model is a wrapper for the mongoose schema
//create a class playlist below and this will be the collection named after an additional "s" by default

//Creaete Collection
const Playlist = new mongoose.model("Playlist", playlistSchema)
//....................................................................



// .................................................................. 
//Create or insert document inside collection

const Song_1 = new Playlist({
    Name : 'Memories',
    Singer : "Maroon 5",
    Duration : 5,
    Active : true
})
// .save() also returns a promise
// Song_1.save();
//.....................................................................




//....................................................................
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
// createDocument();

//  when ever we run this code the same above document get inserted multiple time


// Adding multiple documents at once

const createMultDoc = async () => {
    try{
        const Song_2 = new Playlist({
            Name : 'Breaking',
            Singer : "Drake",
            Duration : 4.5,
            Active : false
        })
        const Song_3 = new Playlist({
            Name : 'Attention',
            Singer : "Justin Beiber",
            Duration : 4.5,
            Active : true
        })
        const Song_4 = new Playlist({
            Name : 'Silent',
            Singer : "Marshmello ft Khalid",
            Duration : 4.6,
            Active : false
        })
        const res = await Playlist.insertMany([Song_2, Song_3, Song_4])
        console.log(res);

    }catch(err){
        console.log(err);
    }
}
// createMultDoc();

//.....................................................................



//.....................................................................
//Read Data
const ReadDoc = async () => {
        try{
                const resData = await Playlist.find()
                const res_AcFalseData = await Playlist.find({Active: false})
                console.log(resData);
                console.log(res_AcFalseData);
            }
            catch(err){
        console.log(err);
    }
}
// ReadDoc();
//.....................................................................




//.....................................................................
//Read Data with comparision data
//suppose find the song whose duration is greater than or equal to 4.5min

const findSong = async () => {
    try{
        const res = await Playlist.find({Duration : {$gte: 4.6}    })
        console.log(res);
    }catch(err){
        console.log(err);
    }
}
// findSong();
//.....................................................................



//.....................................................................
// $in (in) and $nin operator

//read data whose singer is either drake adn justien bieber

const showInOpt = async () => {
    try{
        const res = await Playlist.find({Singer:  {$in: ["Justin Beiber", "Drake"] }  })
        console.log(res);
    }catch(err){
        console.log(err);
    }
}
// showInOpt();

//Not in opt

const showNInOpt = async () => {
    try{
        const res = await Playlist.find({Singer:  {$nin: ["Justin Beiber", "Drake"] }  })
        console.log(res);
    }catch(err){
        console.log(err);
    }
}
// showNInOpt();
//.....................................................................



//.....................................................................
// logical operator in mongoose ($and, $or, $nor, $not)

//and
//show document whose duration is 4.5 and singer is Drake
const andOpt = async () => {
    try{
        const res = await Playlist.find( {$and: [{Duration : 4.5}, {Singer : "Drake"}] } )
        console.log(res);
    }catch(err){
        console.log(err);
    }
}
// andOpt();

const orOpt = async () => {
    try{
        const res = await Playlist.find( {$or: [{Duration : 4.5}, {Singer : "Drake"}] } )
        console.log(res);
    }catch(err){
        console.log(err);
    }
}
// orOpt();
//.....................................................................




//.....................................................................
//find the counts of the document present in playlist
const findcount = async () => {
    try{
        const res = await Playlist.find().countDocuments()
        console.log(res);
    }catch(e){
        console.log(e);
    }
}
// findcount();

//find the document with alphabatical order wrt name field
const findAlphaname = async () => {
    try{
        const res = await Playlist.find().sort({Name: 1})
        console.log(res);
    }catch(e){
        console.log(e);
    }
}
// findAlphaname();
//.....................................................................




//.....................................................................
//update the time duration of attention song by its id
const updateDocument = async (id) => {
    try{
        const res = await Playlist.updateOne(
        {_id: id},
        {$set : {Duration: 3.7}}
    )
    console.log(res);
        }catch(e){
            console.log(e);
        }
}
// updateDocument("606c00bf4158326390c41d39");
//.....................................................................



//.....................................................................
//Deletion in mongoose
const deletedoc = async (_id) => {
    try{    const res = await Playlist.deleteOne({_id});
        // or const res = await Playlist.findByIdAndDelete({_id})
            console.log(res); 
        }catch(error){  console.log(error);  }
}
// deletedoc()
//.....................................................................
