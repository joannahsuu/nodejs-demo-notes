# nodejs-demo-notes

**Node 模組介紹**

```
1. Global 全域物件
2. 核心模組：createServer
3. export 模組
4. Path
```

**NPM 介紹**

**Firebase 介紹**

**Firebase -- BMI 計算練習**

**Express node.js web 應用程式架構**


***express 環境安裝***

1. 輸入以下指令：

```
npm install express --save
```

2. 開啟 web 伺服器
  - 新增一個 app.js
  - 載入 express

```
  var express = require('express')
  var app = express()
```

  - 監聽 port

```
  var port = process.env.PORT || 3000 // 根據雲端服務器
  app.listen(port)
```

---

**express 應用產生器**


***快速產生 express 應用程式架構***

https://expressjs.com/zh-tw/starter/generator.html

全域安裝：
```
npm install express-generator -g
```

建立模板：
```
express -e project-name
```
