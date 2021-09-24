const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Well come to images!')
})

app.get('/iamges', (req, res) => {
  res.send('Well come to /images paht!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
