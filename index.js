import 'dotenv/config'

import api from './app'

const { API_PORT } = process.env || 8080

api.listen(API_PORT, () => console.log(`Api Running - Port: ${API_PORT}`))
