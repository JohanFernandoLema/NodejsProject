//MVC model view controller
const express = require('express')
const app = express()
const RestaurantController = require('./controller/RestaurantController')

app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.static('./public'))

const port = 3000

// Routing

app.get('/', RestaurantController.getHomePage)
app.get('/get-db-data', RestaurantController.getRestaurantList)
app.get('/get-single-data/:city', RestaurantController.getSingleRestaurant)

// app.post()
// app.put()
// app.delete()

// Making the server go live
app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
