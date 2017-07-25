const express = require('express')
const mustacheExpress = require('mustache-express')
const data = require('./data.js')

const app = express()

app.listen(3000, () => {
  console.log('All your GET requests are belong to me - on port 3000')
})

app.use(express.static('public'))

app.engine('mustache', mustacheExpress())
app.set('views', './templates')
app.set('view engine', 'mustache')

app.get('/', (request, response) => {
  response.render('index', data)
})
app.use(express.static('public'))
app.get('/users/:id', (request, response) => {
  const userData = data.users[request.params.id - 1]
  response.render('user', userData)
})
