const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  res.send('post请求')
})
app.put('/', (req, res) => {
  res.send('put请求')
})
app.delete('/', (req, res) => {
  res.send('delete请求')
})

app.use(express.static('static'))
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})