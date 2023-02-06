import Electronic from '../models/electronics.model.js'
import getUser from '../config/tokenHelper.js'

const Electronics = {

  getPage: async (req, res) => {
    await res.render('electronics')
  },

  create: async (req, res) => {
    const { serial } = req.body
    const { email } = await getUser(req)
    const serialExists = await Electronic.findOne({ serial })
    if (!serialExists) {
      const electronic = await Electronic.create({ ...req.body, owner: email })
      res.status(201).send({ id: electronic._id })
    }
  },

  list: async (req, res) => {
    const { email } = getUser(req)
    const electronics = await Electronic.find({ owner: email })
    res.status(200).json(electronics)
  },

  listOne: async (req, res) => {
    const { email } = getUser(req)
    const { serial } = req.params
    const electronic = await Electronic.findOne({ serial, owner: email })
    if (electronic) {
      res.status(200).send(electronic)
    } else {
      res.sendStatus(404)
    }
  },

  update: async (req, res) => {
    const { serial } = req.params
    const electronic = Electronic.findOne({ serial })
    if (electronic) {
      await Electronic.findOneAndUpdate({ serial }, req.body)
      res.sendStatus(204)
    } else {
      res.sendStatus(404)
    }
  },

  destroy: async (req, res) => {
    const { serial } = req.params
    const { email } = await getUser(req)
    const isOwner = await Electronic.findOne({ serial, owner: email })
    if (isOwner) {
      await Electronic.deleteOne({ serial })
      res.sendStatus(204)
    } else {
      res.sendStatus(404)
    }
  }
}

export default Electronics
