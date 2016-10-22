const express = require('express')

const app = express()
const port = process.argv[2] || 3000

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} ${req.ip}`)
  next()
})

app.get('/', (req, res, next) => {
  res.send('Hello, world!')
})

app.use((req, res) => {
  res.status(404).send('404 Not Found')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
