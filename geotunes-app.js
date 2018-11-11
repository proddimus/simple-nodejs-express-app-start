const express = require('express')
const helper = require('./geotunes-helper')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => res.json({message: 'Hello World!'}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
