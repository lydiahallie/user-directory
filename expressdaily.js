const express = require('express')
const mustacheExpress = require('mustache-express')
const data = require('./users.js')
const app = express()
app.use(express.static('public'))

app.engine('mustache', mustacheExpress())
app.set('views', './templates')
app.set('view engine', 'mustache')

app.get('/', (request, response) => {
  response.render('index', data)
})

app.use(express.static('public'))
app.get('/users/:username', (request, response) => {
  const username = request.params.username;
  response.render('user', username)
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
