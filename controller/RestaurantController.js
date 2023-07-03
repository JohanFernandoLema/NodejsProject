const dbData = require('../model/db.json')
const RestaurantController = {
  getHomePage: (req, res) => {
    res.render('index.pug')
  },
  getRestaurantList: (req, res) => {
    let sendData = {
      dbData,
    }
    res.send(sendData)
  },
}
module.exports = RestaurantController
