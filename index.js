import 'dotenv/config'

import api from './app'

import mongoose from 'mongoose'

const { API_PORT, NODE_ENV } = process.env || 8080

const { MONGO_DB, MONGO_PARAMS, MONGO_PASSWORD, MONGO_URL, MONGO_USER } = process.env
const url = NODE_ENV === 'local' ? 'mongodb://127.0.0.1:27017' : `mongodb+srv://${encodeURIComponent(MONGO_USER)}:${encodeURIComponent(MONGO_PASSWORD)}@${MONGO_URL}/${MONGO_DB}?${MONGO_PARAMS}`

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
  api.listen(API_PORT, () => console.log(`Api running on port: ${API_PORT}`))
})

mongoose.connection.on('error', console.error.bind(console, 'Mongoose connection error:'))
