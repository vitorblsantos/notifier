import dotenv from 'dotenv'

import api from './app'

if (process.env.NODE_ENV === 'development') dotenv.config()

const { API_PORT } = process.env || 8080

api.listen(API_PORT, () => console.log(`Api Running - Port: ${API_PORT}`))
