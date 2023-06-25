//MVC model view controller
const AppRouting = require('./components/homePage')
const express = require('express')
const app = express()

const port = 3000

// Routing

app.use('/', AppRouting)
app.get('/about-us', (req, res) => res.end('About Hello World!'))

// app.post()
// app.put()
// app.delete()

// Making the server go live
app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
