const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

//Definir URL base para todas as rotas
const { getDailyTrends } = require('./metodos')
server.get('/api/dailytrends', getDailyTrends)

server.listen(3002, console.log('SERVIDOR RODANDO'))

module.exports = server