const express = require('express')
const app = express()

app.get('/:nome', (req, res) => {
  res.write(`Oi ${req.params.nome}`)
  res.end()
})

app.listen(3001, 'localhost', function() {
  console.log('Você ligou seu server')
})