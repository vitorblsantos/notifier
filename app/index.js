import {
  email,
  status,
  users,
  whatsapp
} from '#routes'

import { auth } from '#middlewares'

import cors from 'cors'
import express from 'express'

const app = express()

app.disable('x-powered-by')

app.use(express.json())
app.use(cors())

if (process.env.NODE_ENV !== 'development') app.use(auth)

app.use('/email', email)
app.use('/users', users)
app.use('/whatsapp', whatsapp)
app.use('/', status)

export default app
