var express = require('express')
var app = express()

// 增加靜態檔案的路徑
app.use(express.static('public'))

// ejs 模板
var engine = require('ejs-locals')
app.engine('ejs', engine)
app.set('views', './views') // 讀取 ejs 檔案
app.set('view engine', 'ejs')

// body-parser
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// 路由進階設定
let user = require('./routers/user')
app.use('/user', user)

let book = require('./routers/books')
app.use('/book', book)

// =========路由=========
// app.get('/', function(req, res){
//   //
//   // res.send('1234')
//   res.send('<html><head><body><h1>HELLO</h1></body></head></html>')
// })

// app.get('/user', function(req, res){
//   //
//   // res.send('1234')
//   res.send('<html><head><body><h1>HELLO! user: tom</h1></body></head></html>')
// })

// // 抓取 xxx 的音樂列表，抓前十筆的資料
// app.get('/user/:name', function(req, res){
//   //
//   let myName = req.params.name
//   let limit = req.query.limit
//   let q = req.query.q
//   console.log('myName', myName)
//   console.log('limit', limit)
//   res.send(`<html><head><body><h1>HELLO! user: ${myName} 想要尋找關鍵字：${q}的${limit} 筆資料</h1></body></head></html>`)
// })

// app.get('/user/edit-profile', function(req, res){
//   //
//   res.send('<html><head><body><h1>HELLO! profile</h1></body></head></html>')
// })

// app.get('/user/edit-photo', function(req, res){
//   //
//   res.send('<html><head><body><h1>HELLO! photo</h1></body></head></html>')
// })


// =========middleware=========
// app.use(req, res, next)
// next 執行下一步

let loginCheck = (req, res, next) => {
  // let _url = req.url
  // if(_url == '/') {
    console.log('someone is coming && validated hi')
    next()
  // }
}

// app.use(loginCheck)

app.get('/', loginCheck, function(req, res){
  //
  // res.send('<html><head><body><h1>index</h1><img src="/img/cat_stolen.jpg"/></body></head></html>')
  // 載入 ejs
  // res.render('index', {
  //   show: true,
  //   title: '<h1>title from app.js<h1>',
  //   boss: 'boss',
  //   course: ['html', 'css', 'js'],
  // })
  res.send('this is home page')
})

app.get('/search', function(req, res){
  //
  // res.send('<html><head><body><h1>index</h1><img src="/img/cat_stolen.jpg"/></body></head></html>')
  // 載入 ejs
  res.render('search')
})

// 使用者傳送資料到後端
app.post('/searchList', function(req, res) {
  console.log(req.body)
  // 轉址
  res.redirect('search')
  // 渲染的版型
  // res.render('search')
})

// ajax
app.post('/searchAJAX', function(req, res) {
  console.log(req.body)
  res.send('hello!!')
})

// app.get('/user', loginCheck, function(req, res){
//   //
//   // res.send('<html><head><body><h1>index</h1><img src="/img/cat_stolen.jpg"/></body></head></html>')
//   // 載入 ejs
//   res.render('user')
// })

// 404 路由設定
app.use(function(req, res, next) {
  res.status(404).send('can not be found!')
})

// error 設定
app.use(function(err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('please try again later')
})

// 監聽 port
var port = process.env.PORT || 3000
app.listen(port)