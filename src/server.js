// Inicialización de express
import express from 'express'
import morgan from 'morgan'

// Importación de rutas
import indexRoutes from './routes/index.routes.js'
import userRoutes from './routes/user.routes.js'
import electronicRoutes from './routes/electronics.routes.js'
import electricRoutes from './routes/electrics.routes.js'
import roleRoutes from './routes/role.routes.js'
import authRoutes from './routes/athentication.routes.js'
import adminRoutes from './routes/admin.routes.js'

// Importación de DB
// import '.config/db.js'

// Configuración de express
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

// Uso de rutas
app.use(indexRoutes)
app.use(userRoutes)
app.use(electronicRoutes)
app.use(electricRoutes)
app.use(roleRoutes)
app.use(authRoutes)
app.use(adminRoutes)

// Exportación de servidor
export default app
