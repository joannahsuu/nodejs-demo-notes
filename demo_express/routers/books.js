let express = require('express')
let router = express.Router()

router.get('/this-week', function(req, res){
  // res.render('user')
  res.send('new in this week')
})

router.get('/rank', function(req, res){
  // res.render('user')
  res.send('ranking')
})

module.exports = router
