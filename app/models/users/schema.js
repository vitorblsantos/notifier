import { Schema } from 'mongoose'
import roles from './roles'

export default new Schema({
  _id: Schema.Types.String,
  active: {
    default: true,
    type: Schema.Types.Boolean
  },
  name: Schema.Types.String,
  role: {
    default: roles.user,
    enum: roles,
    type: Schema.Types.String
  }
}, { timestamps: true })
