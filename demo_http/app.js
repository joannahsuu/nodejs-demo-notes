var http = require('http')
// 開啟 web server
http.createServer((request, response) => {
  console.log(request.url)
  response.writeHead(200, { 'Content-type' : 'text/plain' })
  response.write('<h1>hello from node.js!!</h1>')
  response.end()
}).listen(8086)