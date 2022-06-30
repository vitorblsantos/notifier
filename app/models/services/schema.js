import mongoose from 'mongoose'

export default new mongoose.Schema({
  _id: mongoose.Schema.Types.String,
  active: {
    default: true,
    type: mongoose.Schema.Types.Boolean
  },
  name: mongoose.Schema.Types.String
}, { timestamps: true })
