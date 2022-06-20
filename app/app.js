import cors from 'cors'
import express from 'express'

import { mailer, status } from './routes'

const app = express()

app.use(express.json())

app.use(cors())

app.use('/mailer', mailer)
app.use('/status', status)
app.use('/', status)

export default app
