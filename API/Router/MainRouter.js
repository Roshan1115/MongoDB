const express = require("express")
const Students  = require("../student")  //imprt created student collec.

//Router
// create new router
const router = new express.Router()

// first define the root link 
router.get('/', (req, res) => {
  res.send('hello you are in the root link')
})


//............................................................
// for firt time registraiton or create (POST)

// router.post('/student', (req, res) => {

    //Get the incommming data
    // const user = new Student(req.body)

    // store the ddata into the database finally
//     user.save()
//     .then(() => {
//       res.status(201).send(user)
//     })
//     .catch((err) => res.status(400).send(err))

// })

//Use Asyunc await insteaad of promices
router.post('/student', async (req,res) => {

  try{
    const user = new Students(req.body)
    const result = await user.save()
    res.status(201).send(result)
  }
  catch(err){
    res.status(400).send(err)
  } 

})
//..........................................................



//..........................................................
// TO read the data from the server. (GET)

router.get('/student', async (req,res) => {
  try{
   const studentData = await Students.find()
   res.status(200).send(studentData)
  }
  catch(err){
    res.status(400).send(err)
  }
})

//read the data of a specific individual by id
router.get('/student/:id', async (req,res) => {
  try{
    const _id = req.params.id
    const singular_student = await Students.findById(_id)
    
    if(singular_student){
      res.status(200).send(singular_student)
    }else{
      res.status(404).send()
    }
  }
  catch(err){
    res.status(500).send(err)
  }
})
//..........................................................



//..........................................................
//update documents by its id

//patch will update the whole documen not field
router.patch('/student/:id', async (req,res) => {
  try{
    const _id = req.params.id
    const updateStudent = await Students.findByIdAndUpdate(_id, req.body, {new: true})

    res.send(updateStudent)
  }
  catch(err){
    res.status(404).send(err)
  }
})
//..........................................................


//..........................................................
//Delete
//by id
router.delete('/student/:id', async (req,res) => {
  try{
    const id = req.params.id
    const deletedResult = await Students.findByIdAndDelete(id)
    if( ! req.params.id){
      return res.status(400).send()
    }
    res.send(deletedResult)
  }
  catch(err){
    res.status(500).send(err)
  }
})

//..........................................................

module.exports = router;