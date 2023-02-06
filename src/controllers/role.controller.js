import Role from '../models/role.model.js'

const Roles = {

  getCollectionsByRole: async (role) => {
    const { collections } = await Role.findOne({ role })
    return collections
  },

  getRoleByName: async (name) => {
    const role = await Role.findOne({ role: name })
    return role
  },

  getPermsByRole: async (name) => {
    const { perms } = await Role.findOne({ role: name })
    return perms
  },

  create: async (req, res) => {
    const { body } = req // Importancion del rol
    const roleExist = await Role.findOne({ role: body.role })
    if (!roleExist) {
      const newRole = await Role.create(body)
      res.status(201).send({ id: newRole._id })
    } else {
      res.status(409).json('Conflicto')
    }
  },

  update: async (req, res) => {
    const { role } = req.params
    const roleExist = await Role.findOne({ role })
    if (roleExist) {
      await Role.findOneAndUpdate({ role }, req.body)
      res.sendStatus(200)
    } else {
      res.status(404).send('Rol no existe')
    }
  },

  list: async (req, res) => {
    const rolesList = await Role.find()
    res.status(200).send(rolesList)
  },

  listOne: async (req, res) => {
    const { role } = req.params
    const roleList = await Role.findOne({ role })
    res.status(200).send(roleList)
  },

  destroy: async (req, res) => {
    const { params } = req
    const roleExists = Role.findOne({ role: params.role })
    if (roleExists) {
      await Role.deleteOne({ role: params.role })
      res.sendStatus(204)
    }
  }

}

export default Roles
