import { Router } from 'express'
import userController from '../api/controllers/user.controller.js'

const router = Router()

// Routes
router.post('/api/user', userController.register)
router.get('/api/user', userController.list)
router.get('/api/user/:username', userController.listOne)
router.put('/api/user/:username', userController.update)
router.delete('/api/user/:username', userController.destroy)

export default router
