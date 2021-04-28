const express = require('express')
const cors = require('cors')
const googleTrends = require('google-trends-api')

// Router
const router = express.Router()

// Importando métodos de busca
const { getOverTime } = require('./metodos')

// Rotas
router.get('/overtime', getOverTime)

module.exports = router;