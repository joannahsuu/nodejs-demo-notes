// global 全域
// global.a = '1' // 繼承至 global
// console.log(global)
// console.log('global')

// 載入模組
var content = require('./data')

var a = 1
console.log(`a : ${a}`)
console.log(`content : ${content.data}`)
console.log(content.bark())
console.log(content)