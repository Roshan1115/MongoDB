const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/FIRST_API_DB', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
.then(() => console.log('connected to FIRST_API_DB'))
.catch((err) => console.log(err))