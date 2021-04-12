const mongoose = require("mongoose")
const { default: validator } = require("validator")

mongoose.connect("mongodb://localhost:27017/RoshanMONGOOSE",{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected Successfully............"))
.catch( e => console.log(e))


// We neet to define the validation inside the schema
const playlistSchema_2 = new mongoose.Schema({
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
    //   enum: ['Annie Marrie', 'Shelena']

  },
  Duration : {
      type: Number,
      //validation:-
      require: true,
    //   validate(val){
    //       if(val <= 0){
    //           throw new Error("Duration must be a positive.")
    //       }
    //   }
  },
  Singer_Email: {
    type: String,
    // validation:-
    validate(val){
        if( ! validator.isEmail(val)){
            throw new Error("Please provide an appropriate email.")
        }
    }
  },
  Date : {
      type: Date,
      default : Date.now
  },
  Active : Boolean
})

const newPlaylist = new mongoose.model("Validation_Playlist", playlistSchema_2)

//let try to insert document wtth validation applied
const example_insert = new newPlaylist({
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
//............................................................





// Custom validation
// we gonna use same schema
//for custom validation we have to weite a keywrd 'validate'
//lets take the exaple of duration here
const exm_inset_2 = async () => {
    try{
        const expSong = new newPlaylist({
            Name: "Everybody Hates Me",
            Singer: "The Chainsmoker",
            Duration: -1.4,     //throw err
            Active: true
        })
        const res = await expSong.save()
        console.log(res);
    }catch(err){
        console.log(err);
    }
}
// exm_inset_2();
//..............................................................\\




//npm validator (validator.js)
const exm_inset_3 = async () => {
    try{
        const expSong = new newPlaylist({
            Name: "The Nights",
            Singer: "Avici",
            Duration: 4.4, 
            Singer_Email: "ads..pqr",   //throw err
            Active: false
        })
        const res = await expSong.save()
        console.log(res);
    }catch(err){
        console.log(err);
    }
}
exm_inset_3();