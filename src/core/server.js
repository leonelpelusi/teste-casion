import express from 'express'
import routes from './routes'

const server = express()

server.use(express.json())
server.use(routes)

export const start = () => {
  server.listen(process.env.PORT)
}
