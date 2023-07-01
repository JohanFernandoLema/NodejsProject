//MVC model view controller
const express = require('express')
const app = express()

const port = 3000

// Routing

app.get('/', (req, res) => res.send('This is the home page'))

// app.post()
// app.put()
// app.delete()

// Making the server go live
app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
