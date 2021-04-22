const jwt = require("jsonwebtoken")
const userCollection = require("../db/registers")

const auth = async (req, res, next) => {
  try{
    const token = req.cookies.jwt;
    const verify = jwt.verify(token, process.env.PORT)
    console.log(verify);

    const user = await userCollection.findOne({_id: verify._id})
    console.log(user);

    next();
  }
  catch(error){
    res.status(401).send(error)
  }
}

module.exports = auth;