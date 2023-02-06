import { Router } from 'express'

import validateJwt from '../api/middlewares/validatejwt.js'
import validateRole from '../api/middlewares/validateRole.js'
import electronicsController from '../api/controllers/electronics.controller.js'

const router = Router()
// End-points de Electrónicos
router.get('/api/electronics', validateJwt, validateRole('lab'), electronicsController.list)
router.get('/api/electronics/:serial', validateJwt, validateRole('lab'), electronicsController.listOne)
router.post('/api/electronics', validateJwt, validateRole('lab'), electronicsController.create)
router.put('/api/electronics/:serial', validateJwt, validateRole('lab'), electronicsController.update)
router.delete('/api/electronics/:serial', validateJwt, validateRole('lab'), electronicsController.destroy)

router.get('/electronics', electronicsController.getPage) // Cargar página desde el frontend

export default router
