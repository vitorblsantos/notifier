import { Router } from 'express'

import { mailer } from '../controllers/index.js'

const router = Router()

router.post('/', mailer.send)

export default router
