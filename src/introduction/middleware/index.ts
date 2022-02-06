import express from 'express'
import logger from 'morgan'

const port = process.env.MIDDLEWARE_PORT
const app = express()
app.use(logger('dev'))

const a_middleware_function = (req, res, next) => {
  // ... perform some operations
  console.log('a_middleware_function is called.')
  next() // Call next() so Express will call the next middleware function in the chain.
}

// Function added with use() for all routes and verbs
app.use(a_middleware_function)

// Function added with use() for a specific route
app.use('/someroute', a_middleware_function)

// A middleware function added for a specific HTTP verb and route
app.get('/', a_middleware_function)

app.listen(port, () => {
  console.log(`Middleware listening on port ${port}!`)
})
