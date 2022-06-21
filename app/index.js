import cors from 'cors'
import express from 'express'

import { mailer, status } from './routes'

const app = express()

app.disable('x-powered-by')

app.use(express.json())
app.use(cors())

app.use('/mailer', mailer)
app.use('/', status)

export default app
