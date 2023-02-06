import { Router } from 'express'
const router = Router()

import roleController from '../controllers/role.controller.js'

router.get('/api/roles/', roleController.list)
router.get('/api/roles/:role', roleController.listOne)
router.post('/api/roles/', roleController.create)
router.put('/api/roles/:role', roleController.update)
router.delete  ('/api/roles/:role', roleController.destroy)

export default router
