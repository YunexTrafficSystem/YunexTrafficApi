import { Router } from 'express'
import roleController from '../api/controllers/role.controller.js'

const router = Router()

router.get('/api/roles/', roleController.list)
router.get('/api/roles/:role', roleController.listOne)
router.post('/api/roles/', roleController.create)
router.put('/api/roles/:role', roleController.update)
router.delete('/api/roles/:role', roleController.destroy)

export default router
