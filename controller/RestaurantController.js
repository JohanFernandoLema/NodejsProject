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
  getSingleRestaurant: (req, res) => {
    // to read data from params we use ==>
    let { city } = req.params
    let result = dbData.filter((item) => item.location === city)
    res.send({ status: true, result })
  },
}
module.exports = RestaurantController
