import Electric from '../models/electrics.model.js'
import getUser from '../config/tokenHelper.js'

const Electrics = {

  getPage: async (req, res) => {
    await res.render('electrics')
  },

  create: async (req, res) => {
    const { serial } = req.body
    const { email } = await getUser(req)
    const electricExists = await Electric.findOne({ serial })
    if (!electricExists) {
      const electric = await Electric.create({ ...req.body, owner: email })
      res.status(201).send({ id: electric._id })
    } else {
      res.sendStatus(409)
    }
  },

  list: async (req, res) => {
    const electrics = await Electric.find()
    res.status(200).json(electrics)
  },

  listOne: async (req, res) => {
    const { serial } = req.params
    const electric = await Electric.findOne({ serial })
    if (electric) {
      res.status(200).send(electric)
    } else {
      res.sendStatus(204)
    }
  },

  update: async (req, res) => {
    const { serial } = req.params
    const electric = Electric.findOne({ serial })
    if (electric) {
      await Electric.findOneAndUpdate({ serial }, req.body)
      res.sendStatus(204)
    } else {
      res.sendStatus(204)
    }
  },

  destroy: async (req, res) => {
    const { serial } = req.params
    const { email } = await getUser(req)
    const isOwner = await Electric.findOne({ serial, owner: email })
    if (isOwner) {
      await Electric.deleteOne({ serial })
      res.sendStatus(204)
    } else {
      res.sendStatus(404)
    }
  }
}

export default Electrics
