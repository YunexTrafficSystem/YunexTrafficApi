import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/users.model.js'

const signToken = _id => jwt.sign({ _id }, process.env.SECRET_KEY)

const Users = {

  getRegisterPage: async (req, res) => {
    await res.render('user')
  },

  getLoginPage: async (req, res) => {
    await res.render('user')
  },

  getIndexPage: async (req, res) => {
    await res.send('ok')
  },

  register: async (req, res) => {
    try {
      const { body } = req
      const userExist = await User.findOne({ email: body.email })
      if (!userExist) {
        const salt = await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(body.password, salt)
        const user = await User.create({ email: body.email, password: hashed, salt })
        const signed = signToken(user._id)
        res.status(201).send({ token: signed })
      } else {
        res.status(403).send({ message: 'User already exists' })
      }
    } catch (e) {
      res.status(400).send({ error: 'Data required' })
    }
  },

  login: async (req, res) => {
    const { body } = req
    try {
      const user = await User.findOne({ email: body.email })
      if (!user) {
        res.send('Usuario y/o contraseña no encontrados')
      } else {
        const match = await bcrypt.compare(body.password, user.password)
        if (match) {
          const signed = signToken(user._id)
          res.status(200).send({ token: signed })
        } else {
          res.send.status(403).send({ message: 'Usuario y/o contraseña no encontrados' })
        }
      }
    } catch (e) {
      res.status(500).send({ error: e.message })
    }
  },

  list: async (req, res) => {
    const users = await User.find()
    console.log(users)
    res.status(200).send(users)
  },

  getUserById: async (id) => {
    const user = await User.findOne({ _id: id })
    return user
  },

  listOne: async (req, res) => {
    const { email } = req.params
    const user = await User.findOne({ email })
    if (user) {
      res.status(200).send(user)
    } else {
      res.sendStatus(404)
    }
  },

  update: async (req, res) => {
    const { serial } = req.params
    const user = User.findOne({ serial })
    if (user) {
      await User.findOneandUpdate({ serial }, req.body)
      res.sendStatus(204)
    } else {
      res.sendStatus(404)
    }
  },

  destroy: async (req, res) => {
    const { serial } = req.params
    const user = User.findOne({ serial })
    if (user) {
      await User.deleteOne({ serial })
      res.sendStatus(204)
    } else {
      res.sendStatus(204)
    }
  }
}

export default Users
