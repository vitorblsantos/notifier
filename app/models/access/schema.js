import mongoose from 'mongoose'

export default new mongoose.Schema({
  _id: mongoose.Schema.Types.String,
  service: mongoose.Schema.Types.String,
  token: mongoose.Schema.Types.String,
  user: mongoose.Schema.Types.String
}, { timestamps: true })
