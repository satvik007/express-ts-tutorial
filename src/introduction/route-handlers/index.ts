import express from 'express'
import router from './wiki'
const port = process.env.ROUTER_HANDLERS_PORT

const app = express()
app.use('/wiki', router)

app.listen(port, () => {
  console.log(`Router handlers listening on port ${port}!`)
})

export default app
