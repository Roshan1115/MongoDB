const express = require("express")
const app = express()
const port = process.env.PORT || 3000
require("./connect")
const StudentRouter = require("./Router/MainRouter")   // for routing

// To let express know the incomming data is a json object
app.use(express.json())
// Register the router
app.use(StudentRouter)

app.listen(port, () => console.log(`Running on port : ${port}`))