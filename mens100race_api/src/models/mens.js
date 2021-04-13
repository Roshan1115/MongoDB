const mongoose = require('mongoose')

const mensSchema = new mongoose.Schema({
  ranking:{
    type:Number,
    unique: true,
    require: true
  },
  name: {
    type: String,
    require: true,
    trim: true
  },
  country:{
    type:String,
    require: true,
    trim: true
  },
  event: {
    type: String,
    default: '100m'
  }
})

const MensRaniking = new mongoose.model("MensRanking", mensSchema)

module.exports = MensRaniking;