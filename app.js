//MVC model view controller

const express = require('express')
const app = express()

const port = 3000

// Routing
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Making the server go live
app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
