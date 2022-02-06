import express from 'express'

const port = process.env.STATIC_FILES_PORT
const app = express()

app.use(express.static('src/static_files/public'))

app.get('/error', (req, res) => {
  throw new Error('Something broke!')
})

// These can return any content required, but must be called after all other app.use() and routes calls so that they are the last middleware in the request handling process!
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log(`Static files server listening on port ${port}`)
})

// http://localhost:4101/longest_palindrome.cpp
// http://localhost:4101/error
