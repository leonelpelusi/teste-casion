import routes from './routes'
import app from './server'

require('dotenv').config()

app.use(routes)
