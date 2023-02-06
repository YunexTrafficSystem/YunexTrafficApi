import { Router } from 'express'
const router = Router()

import validateJwt from '../api/middlewares/validatejwt.js'
import validateRole from '../api/middlewares/validateRole.js'
import Admin from '../controllers/admin.controller.js'

router.get('/api/admin', validateJwt, validateRole('admin'), Admin.listUsers) // Listar usuarios
router.put('/api/verify/:username', validateJwt, validateRole('admin'), Admin.vrUser) // Habilitar usuarios
router.put('/api/update/:username', validateJwt, validateRole('admin'), Admin.updUser) // Actualizar un usuario
router.delete('/api/admin', validateJwt, validateRole('admin'), Admin.delUser) // Eliminar un usuario

export default router
