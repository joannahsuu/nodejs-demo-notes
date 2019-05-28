var path = require('path') // 路徑

var a = 1
var b = 2
console.log(__dirname)
console.log(__filename)
var c = 3

// 抓目錄路經
console.log(path.dirname('/xx/yy/zz.js'))
// 路徑合併
console.log(path.join(__dirname, '/xx'))
// 抓檔名
console.log(path.basename('/xx/yy/zz.js'))
// 抓副檔名
console.log(path.extname('/xx/yy/zz.js'))
// 分析路徑
console.log(path.parse('/xx/yy/zz.js'))