const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
      title: 'This is my console test !!',
      message: 'This is the test you deserve, but not the one you need right now !!'
    })
})

app.post('/register', (req, res) => {
  res.send({
      email: req.body.email,
      password: req.body.password,
      message: 'I was working all along !!'
    })
})

const PORT = process.env.PORT || 8081;

app.listen(PORT, function() {

  console.log("Server listening on: http://localhost:" + PORT);
});
