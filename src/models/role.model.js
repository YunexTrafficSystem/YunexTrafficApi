import mongoose from 'mongoose'

const model = mongoose.model('Role', {
  role: { type: String, required: true, lowercase: true },
  perms: {
    query: { type: Boolean, required: true, default: false },
    create: { type: Boolean, required: true, default: false },
    update: { type: Boolean, required: true, default: false },
    drop: { type: Boolean, required: true, default: false }
  },
  // Colecciones de las que es DUEÑO
  collections: { type: Array, required: false, default: [] }
})

export default model
