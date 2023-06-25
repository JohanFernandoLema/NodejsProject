//routing using express

const AppRouting = require('express').Router()

AppRouting.get('/', (req, res) => {
  res.end('This is the home page')
})

module.exports = AppRouting
