const e = require("express")
const express = require("express")
const app = express()
const port = process.env.PORT || 3000
require("./connect")

//create student
const Student  = require("./student")

// To let express know the incomming data is a json object
app.use(express.json())

// first define the root link 
app.get('/', (req, res) => {
  res.send('hello you are in the root link')
})

// for firt time registraiton or create 
app.post('/student', (req, res) => {

    //Get the incommming data
    const user = new Student(req.body)

    // store the ddata into the database finally
    user.save()
    .then(() => {
      res.status(201).send(user)
    })
    .catch((err) => res.status(400).send(err))

})

app.listen(port, () => console.log(`Running on port : ${port}`))