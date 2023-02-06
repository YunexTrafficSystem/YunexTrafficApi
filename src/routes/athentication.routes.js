import validateJwt from '../api/middlewares/validatejwt.js'
import validateRole from '../api/middlewares/validateRole.js'
import userController from '../controllers/user.controller.js'
import { Router } from 'express'

const router = Router()

router.post('/singup', userController.register)
router.post('/singin', userController.login)
router.get('/users', validateJwt, validateRole('user'), userController.getIndexPage)

export default router
