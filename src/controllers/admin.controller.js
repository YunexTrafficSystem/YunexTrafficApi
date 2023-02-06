import User from '../models/users.model.js'

// Importaciń de modelos
const Admin = {

  listUsers: async (req, res) => {
    // Listar todos los usuarios
    const userList = await User.find()
    res.status(200).json(userList)
  },

  updUser: async (req, res) => {
    // Actualiza usuario (rol , permisos)
    // Usuarios que no sean administradores
    const { perms, role } = req.body
    const { username } = req.params
    if (perms && role) {
      const user = await User.findOneAndUpdate({ username }, { perms, role })
      res.status(200).json(user)
    } else {
      res.status(400).json({ status: 'Bad request' })
    }
  },

  vrUser: async (req, res) => {
    // Habilita y deshabilita usuarios
    const { username } = req.params
    const user = await User.findOne({ username })
    const { verified } = user
    const vrStatus = !verified
    await User.findOneAndUpdate({ username }, { verified: vrStatus })
    res.status(200).json({ verified: vrStatus })
  },

  delUser: async (req, res) => {
    const { username } = req.params
    const user = await User.findOneAndDelete({ username })
    if (user) {
      res.sendStatus(204)
    } else {
      res.status(404).json({ status: 'User not found' })
    }
  }
}

export default Admin
