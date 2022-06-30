import { Router } from 'express'
import { user } from '#controllers'

const router = Router()

router.get('/', user.find)
router.post('/', user.create)

export default router
