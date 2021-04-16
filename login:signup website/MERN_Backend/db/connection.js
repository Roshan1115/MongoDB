const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/VERZEO_DB_RoshanBishi", {
  useCreateIndex: true,
  useUnifiedTopology:true,
  useNewUrlParser: true,
  useFindAndModify: false
})
.then(() => console.log('Connected to "VERZEO_DB_RoshanBishi"'))
.catch((e) => console.log("ERROR! Connection to database is Unsuccessful"))