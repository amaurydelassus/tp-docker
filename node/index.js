const express = require('express')
const app = express()
const port = 8081

app.get('/hello', (req, res) => {
  res.json({ username: 'lucky' })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
