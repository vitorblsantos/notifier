import { Router } from 'express'

import { mailer } from '../controllers/index.js'

const router = Router()

router.get('/', mailer)

export default router
