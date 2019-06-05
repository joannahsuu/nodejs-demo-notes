let send = document.getElementById('sendBtn')
let content = document.getElementById('content')

send.addEventListener('click', function(e) {
  e.preventDefault() // 終止預設表單行為
  let str = content.value
  console.log('content', str)

  // ajax
  let xhr = new XMLHttpRequest()
  xhr.open('post', '/searchAJAX')
  // 表單格式
  // content=1234&title=hello
  // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
  // json 格式
  // { content: '1234' }
  xhr.setRequestHeader('Content-type', 'application/json')
  // let apiParam = `content=${content}`
  let apiParam = JSON.stringify({ content: str, list: ['1', '2', '3']})
  xhr.send(apiParam)
  xhr.onload = () => {
    console.log(xhr.responseText)
  }
})