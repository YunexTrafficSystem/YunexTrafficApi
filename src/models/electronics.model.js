import mongoose from 'mongoose'

const Electronics = mongoose.model('Electronic', {
  serial: { type: Number, required: true, minLength: 2 },
  project_name: { type: String, required: true, minLength: 5 },
  module_name: { type: String, required: true, minLength: 5 },
  controller_type: { type: String, required: true, minLength: 5 },
  entry_diagnostic: { type: String, required: false, minLength: 5 },
  component: {
    comp_type: { type: String, required: true, minLength: 5 },
    comp_quant: { type: Number, required: true, minLength: 5 },
    type: Array
  },
  owner: { type: String, required: true },
  dates: {
    testing_date: { type: Date, required: false },
    tested_date: { type: Date, required: false },
    entry_date: { type: Date, required: true, default: Date.now }
  }

})

export default Electronics
