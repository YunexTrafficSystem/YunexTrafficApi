import { expressjwt as ejwt } from 'express-jwt'

const validateJwt = ejwt({
  secret: process.env.SECRET_KEY || 'UwUFv79pXDrzTKmSsc',
  algorithms: ['HS256']
})

export default validateJwt
