import { MongoClient } from 'mongodb'
import express from 'express'

const port = process.env.MONGODB_PORT
const app = express()

app.get('/', (req, res) => {
  MongoClient.connect('mongodb://localhost:27017/animals', function (err, client) {
    if (err) throw err

    const db = client.db('animals')
    db.collection('mammals')
      .find()
      .toArray(function (err, result) {
        client.close()
        if (err) throw err
        res.send(result)
      })
  })
})

app.listen(port, () => {
  console.log(`Mongodb listening on port ${port}`)
})
