const express = require("express")
const app = express()
const router = require("./routing")
require('dotenv').config()
const port = process.env.PORT || 3000
require("./db/connection")

// app.use(express.json())
app.use(router)

//.................................................................
const jwt = require("jsonwebtoken")   // for nodejs authentication using token

createToken = async () => {
  const token = await jwt.sign({_id: "6076a24e8c005bf3b28ac2a5"}, "e;wjgghqehgqirhgqih;idqs;whgqwhigqwh[iih", {expiresIn: "1 minute"})
  // console.log(token);
  
  const userVari = await jwt.verify(token, "e;wjgghqehgqirhgqih;idqs;whgqwhigqwh[iih")
  // console.log(userVari);
}

createToken();
//.................................................................



app.listen(port, (req, res) => {
  console.log(`Listening on port : ${port}`);
})