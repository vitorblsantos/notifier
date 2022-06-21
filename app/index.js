import cors from 'cors'
import express from 'express'

import { email, status } from './routes'

const app = express()

app.disable('x-powered-by')

app.use(express.json())
app.use(cors())

app.use('/email', email)
app.use('/', status)

export default app
