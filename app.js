const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', function (req, res) {
  if(Math.random() < .05) {
    res.send('Welcome to Unreliable Technology!')
  } else {
    res.status('500').send('Something went wrong!')
  }
})

app.listen(port, () => console.log('Listening on port ' + port))
