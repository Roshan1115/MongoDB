const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/FIRST_API_DB", {
  useCreateIndex:true,
  useNewUrlParser:true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
.then(() => console.log("Connected to the database"))
.catch((e) => console.log("No Connection !"))