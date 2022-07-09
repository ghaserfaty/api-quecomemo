const express = require('express')
const app = express()

const cors = require('cors')
var bodyParser = require('body-parser')
const port = 3002
require('./app/database/connect')

const setupRoutes = require('./api')

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())  

app.get('/', (req, res) => {
  res.send('Hello Worldw!')
})

setupRoutes(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
