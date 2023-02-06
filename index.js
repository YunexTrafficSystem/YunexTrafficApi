import server from './src/server.js'

import 'dotenv/config' // Dotenv
import './src/config/db.config.js'
import './src/config/initialSetup.js'

const port = process.env.PORT || 3000

// Starting the server
server.listen(port, () => {
  console.log(`Listen in: ${port}`)
})
