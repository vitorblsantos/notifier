import { Schema } from 'mongoose'

export default new Schema({
  _id: Schema.Types.String,
  active: {
    default: true,
    type: Schema.Types.Boolean
  },
  name: Schema.Types.String
}, { timestamps: true })
