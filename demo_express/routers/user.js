let express = require('express')
let router = express.Router()


router.get('/edit-profile', function(req, res){
  // res.render('user')
  res.send('profile')
})

router.get('/photo', function(req, res){
  // res.render('user')
  res.send('photo')
})

router.get('/news', function(req, res){
  // res.render('user')
  res.send('news')
})

module.exports = router