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
    let data = req.params
    res.send({ status: true, result: dbData, data })
  },
}
module.exports = RestaurantController
