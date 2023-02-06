import mongoose from 'mongoose'

// Preparando mongoose 7
mongoose.set('strictQuery', false)

// Creando conexión
mongoose.connect('mongodb://127.0.0.1:27017/system')
  .then(() => {
    console.log('Server: DB Conected')
  })
  .catch((err) => {
    console.log(`Error: ${err.message}`)
  })

// Exportamos la coneción
export default mongoose.connection
