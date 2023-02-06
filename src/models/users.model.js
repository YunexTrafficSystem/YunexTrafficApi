import mongoose from 'mongoose'

export default mongoose.model('User', {
  verified: { type: Boolean, required: true, default: false },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: 'user' },
  salt: { type: String, required: true }
})
