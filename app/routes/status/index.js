import { Router } from 'express'

const router = Router()

router.get('/', (_, res) => res.status(200).send('Api alive'))

export default router
