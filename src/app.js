import 'dotenv/config'
import { start } from './core/server'
import { connect } from './core/database'

(async function app () {
  try {
    await connect()
    await start()
    console.log(new Date(), 'Server online')
  } catch (error) {
    console.error('Failed to start application', error)
  }
}())
