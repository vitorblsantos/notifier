import cors from 'cors'
import express from 'express'

import { auth } from './middlewares'
import { email, status } from './routes'

const app = express()

app.disable('x-powered-by')

app.use(express.json())
app.use(cors())

if (process.env.NODE_ENV !== 'development') app.use(auth())

app.use('/email', email)
app.use('/', status)

export default app
