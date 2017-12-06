const express = require('express')
const { json } = require('body-parser')
const mc = require(__dirname + '/controllers/messages_controllers')

const port = 3000

const app = express()

app.use(express.static(__dirname + '/../public/build'))

app.use(json())

app.post('/api/messages', mc.create)
app.get('/api/messages', mc.read)
app.put('/api/messages/:id', mc.update)
app.delete('/api/messages/:id', mc.destroy)

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
