import mongoose from 'mongoose'

// Añadir modelos generales que permitan crear nuevos modelos
const Electrics = mongoose.model('Electric', {
  serial: { type: Number, required: true, minLength: 2 },
  project_name: { type: String, required: true, minLength: 5 },
  module_type: { type: String, required: true, minLength: 3 },
  color: { type: String, required: true, minLength: 3 },
  entry_diagnostic: { type: String, required: true, minLength: 3 },
  initial_displacement: { type: Number, required: true, minLength: 1 },
  power: { type: Number, required: false, minLength: 2 },
  voltage: { type: Number, required: false, minLength: 2 },
  current: { type: Number, required: true, minLength: 2 },
  testing_date: { type: Date, required: false },
  tested_date: { type: Date, required: false },
  entry_date: { type: Date, required: true, default: Date.now },
  owner: { type: String, required: true }
})

export default Electrics
