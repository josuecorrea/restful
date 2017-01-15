const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')
const server = express()

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(morgan('dev'))

server.listen(port, function(){
    console.log(`Backend is runnig on port ${port}.`)
})

module.exports = server