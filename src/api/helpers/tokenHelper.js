import User from '../models/users.model.js'
import jwt from 'jsonwebtoken'

const getUser = async (req, res) => {
  const { authorization } = req.headers
  const token = await authorization.split(' ').pop() // Obtiene token
  if (token !== 'undefined') {
    const decoded = jwt.decode(token) // Extrae info del token
    const user = await User.findById(decoded._id) // Busca usuario por id
    return user
  } else {
    res.status(404).end('Usuario no encontrado')
  }
}

export default getUser
