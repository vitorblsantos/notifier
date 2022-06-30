import { Router } from 'express'

import { email } from '#controllers'

const router = Router()

router.post('/', email.submit)

export default router
