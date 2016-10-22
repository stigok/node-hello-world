const express = require('express')

const app = express()
const port = process.argv[2] || 3000

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} ${req.ip}`)
  next()
})

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.use((err, req, res) => {
  const status = err ? 500 : 404
  res
    .status(status)
    .send(`An error occured... (${status})`)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
