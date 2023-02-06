/* eslint-disable no-unused-expressions */
import 'colors'
import Role from '../models/role.model.js'
import User from '../models/users.model.js'
import bcrypt from 'bcrypt'

// Lista de roles
const roleList = [
  {
    role: 'user',
    perms: {
      query: true,
      create: true,
      update: true,
      drop: true
    }
  },
  {
    role: 'admin',
    perms: {
      query: true,
      create: true,
      update: true,
      drop: true
    }
  },
  {
    role: 'lab',
    perms: {
      query: true,
      create: true,
      update: true,
      drop: true
    }
  },
  {
    role: 'external',
    perms: {
      query: true,
      create: false,
      update: false,
      drop: false
    }
  },
  {
    role: 'guest',
    perms: {
      query: true,
      create: false,
      update: false,
      drop: false
    }
  }
]

// Verificación de rol y usuario
roleList.map(async ({ role }) => {
  const newRole = await Role.findOne({ role })
  if (!newRole) {
    await Role.create(role)
    console.log('EXITO'.bgGreen.white + ` Rol de ${role.role} creado `)
  }
})

// Verificación de existencia de admin
const adm = await User.findOne({ role: 'admin' })

if (!adm) {
  async () => {
    const salt = await bcrypt.genSalt(10)
    const email = process.env.ADMIN
    const password = process.env.PASSWORD
    console.log(password)
    const hashed = bcrypt.hash(password, salt)
    await User.create({ email, password: hashed, salt, role: 'admin' })
    console.log('EXITO'.bgGreen.white + ' Admin creado')
  }
}
