import { Router } from 'express'
import { user } from '#controllers'

const router = Router()

router.delete('/', user.inactive)
router.get('/', user.find)
router.post('/', user.create)
router.put('/', user.update)

export default router
