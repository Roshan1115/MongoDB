const express = require("express")
const router = new express.Router()
const MensRaniking = require("../models/mens")

router.get('/', (req, res) => {
  res.send("Hellow from the / site")
})

//create routera
router.post('/mens', async (req,res) => {
  try{
    const data = new MensRaniking(req.body)
    const result = await data.save()
    res.status(201).send(result)
  }catch(e){
    res.status(400).send(e)
  }
})

//read the data
router.get('/mens', async (req,res) => {
  try{
    const data = await MensRaniking.find().sort({"ranking":1})
    res.status(200).send(data)
  }catch(e){
    res.status(400).send(e)
  }
})

//Read data of a individual by id
router.get('/mens/:id', async (req,res) => {
  try{
    const id = req.params.id
    const data = await MensRaniking.findById(id)
    res.status(200).send(data)
  }catch(e){
    res.status(404).send(e)
  }
})

//find by id and update
router.patch('/mens/:id', async (req,res) => {
  try{
    const id = req.params.id
    const data = await MensRaniking.findByIdAndUpdate(id, req.body, {new:true})
    res.status(200).send(data)
  }catch(e){
    res.status(500).send(e)
  }
})

//find by id and delete
router.delete('/mens/:id', async (req,res) => {
  try{
    const id = req.params.id
    const data = await MensRaniking.findByIdAndDelete(id)
    res.status(200).send(data)
  }catch(e){
    res.status(500).send(e)
  }
})

module.exports = router;