const mongoose = require("mongoose")


mongoose.connect("mongodb://localhost:27017/RoshanMONGOOSE",{ useNewUrlParser: true, useUnifiedTopology: true })
.then( () => console.log("Connected Successfully...."))
.catch( err => console.log(err))
//Mongoose.connect() return promises