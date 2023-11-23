const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ideaSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  note: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Idea', ideaSchema)