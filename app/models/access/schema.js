import { Schema } from 'mongoose'

export default new Schema({
  _id: Schema.Types.String,
  service: Schema.Types.String,
  token: Schema.Types.String,
  user: Schema.Types.String
}, { timestamps: true })
