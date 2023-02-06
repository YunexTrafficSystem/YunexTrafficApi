import Role from '../../models/role.model.js'
import getUser from '../../config/tokenHelper.js'

// Extraer rol desde aquí
const validateRole = (role) => async (req, res, next) => {
  // Verifiación de roles
  try {
    const user = await getUser(req, res, next)
    const usrRole = await Role.findOne({ role })
    if (!usrRole) return res.status(404).json({ status: 'Not found' })
    if (usrRole === 'admin') next()

    // Verifica si es administrador
    const mthd = req.method

    // Verifica si el rol tiene los permisos necesarios para pasar (generalidades)
    if (mthd === 'GET' && !usrRole.perms.query) return res.status(409).json({ status: 'unauthorized' })
    if (mthd === 'POST' && !usrRole.perms.create) return res.status(409).json({ status: 'unauthorized' })
    if (mthd === 'PUT' && !usrRole.perms.update) return res.status(409).json({ status: 'unauthorized' })
    if (mthd === 'DELETE' && !usrRole.perms.drop) return res.status(409).json({ status: 'unauthorized' })

    // Si usuario tiene Rol
    if (role === user.role) {
      next()
    } else {
      return res.sendStatus(403)
    }
  } catch (e) {
    res.end({ error: e.message })
  }
}

export default validateRole
