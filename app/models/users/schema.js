import mongoose from 'mongoose'
import roles from './roles'

export default new mongoose.Schema({
  _id: mongoose.Schema.Types.String,
  active: {
    default: true,
    type: mongoose.Schema.Types.Boolean
  },
  name: mongoose.Schema.Types.String,
  role: {
    default: roles.user,
    enum: roles,
    type: mongoose.Schema.Types.String
  }
}, { timestamps: true })
