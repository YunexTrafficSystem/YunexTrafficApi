import { Router } from 'express'
const router = Router()

import validateJwt from '../api/middlewares/validatejwt.js'
import validateRole  from '../api/middlewares/validateRole.js'

import electricsController from '../controllers/electrics.controller.js'

// End-points de Eléctricos
router.get('/api/electrics', validateJwt, validateRole('lab'), electricsController.list)
router.get('/api/electrics/:serial', validateJwt, validateRole('lab'), electricsController.listOne)
router.post('/api/electrics/', validateRole('lab'), electricsController.create)
router.put('/api/electrics/:serial', validateJwt, validateRole('lab'), electricsController.update)
router.delete('/api/electrics/:serial', validateJwt, validateRole('lab'), electricsController.destroy)
router.get('/electrics', electricsController.getPage) // Cargar página desde el frontend

export default router
