import mongoose from 'mongoose'

export default new mongoose.Schema({
  _id: mongoose.Schema.Types.String,
  active: {
    default: true,
    type: mongoose.Schema.Types.Boolean
  },
  key: mongoose.Schema.Types.String,
  user: mongoose.Schema.Types.String
}, { timestamps: true })
