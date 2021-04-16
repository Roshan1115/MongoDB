const express = require("express")
const router = express.Router()
const path = require("path")
const userCollecion = require("./db/registers")
const bcrypt = require("bcryptjs")


const static_path = path.join(__dirname, '..//frontend')
router.use(express.static(static_path)) 

router.use(express.json())
router.use(express.urlencoded({extended:false}))

router.get('/', (req,res) => {
  res.send("you are inside the index.html file")  // It automatically look for index.html
})

router.get('/signup', (req,res) => {
  res.sendFile(static_path + '/signUp.html')
})

//Signup new user
router.post('/signup', async (req, res) => {
  try{
    if(req.body.password === req.body.re_password){
      if(req.body.password.length < 8){
        return res.status(400).sendFile(static_path + "/eightCharacter.html")
        }
        const data = new userCollecion({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.re_password     })
        
        const result = await data.save() 
        res.sendFile(static_path + '/home.html')

      }else{
      return res.status(404).sendFile(static_path + '/PwNotMatching.html')
      }

  }catch(e){
    res.status(400).sendFile(static_path + "/signinErr.html")
  }
})

//log in user
router.post('/login', async (req,res) => {
  try{
    const userData = await userCollecion.findOne({email: req.body.email})
    const passwordMatch = await bcrypt.compare(req.body.password, userData.password)
    if(passwordMatch){
      res.status(201).sendFile(static_path + '/home.html')
    }else{
      res.status(400).sendFile(static_path + '/invalidLogin.html')
    }
  }catch(e){
    res.status(400).sendFile(static_path + "/loginErr.html")
  }
})

module.exports = router