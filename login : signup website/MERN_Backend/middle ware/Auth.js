const jwt = require("jsonwebtoken")
const userCollection = require("../db/registers")

const auth =  (req, res, next) => {
  const token = req.cookies.jwt;
  if(token){
    jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken) => {
      if(err){
        res.redirect('/')
      }
      else{
        next();
      }
    })
  }
  else{
    res.redirect('/');
  }
}

module.exports = auth ;