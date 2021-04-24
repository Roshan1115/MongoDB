const express = require("express")
const router = express.Router()
const path = require("path")
const userCollecion = require("./db/registers")
const bcrypt = require("bcryptjs")
const cookieParser = require("cookie-parser")
const auth = require("./middle ware/Auth")
const { rootCertificates } = require("tls")


const static_path = path.join(__dirname, '..//frontend')
router.use(express.static(static_path)) 

// Middle ware
router.use(express.json())
router.use(cookieParser());
router.use(express.urlencoded({extended:false}))

router.get('/', (req,res) => {
  res.send("you are inside the index.html file")  // It automatically look for index.html
})

router.get('/signup', (req,res) => {
  res.sendFile(static_path + '/signUp.html')
})

router.get('/home', auth,  (req, res) => {
  res.sendFile(static_path + '/home.html')
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

          //....middle ware bcrypt.js used defined in register.js whjich runs before saving..........
          //....another middle ware JWT token we ganna use which is used in register.js
          const token = await data.generateAuthToken();

        // res.cookie() func is used to set cookie name to value
        //value param can be string or object converted to JSON.
        //res.cookie( name, value, {optional})
          res.cookie('jwt', token, {
            httpOnly: true //user can't access from browser console.
          });
        

        const result = await data.save() 
        res.redirect('/home')

      }else{
      return res.status(404).sendFile(static_path + '/PwNotMatching.html')
      }

  }catch(e){
    console.log(e);
    res.status(400).sendFile(static_path + "/signinErr.html")
  }
})



//log in user
router.post('/login', async (req,res) => {
  try{
    const userData = await userCollecion.findOne({email: req.body.email})
    const passwordMatch = await bcrypt.compare(req.body.password, userData.password)

    //.......middle ware...........generate token
    const token = await userData.generateAuthToken();

    res.cookie('jwt', token, { httpOnly: true });

    if(passwordMatch){
      res.status(200).redirect('/home')
    }else{
      res.status(400).sendFile(static_path + '/invalidLogin.html')
    }
  }catch(e){
    res.status(400).sendFile(static_path + "/loginErr.html")
  }
})

module.exports = router