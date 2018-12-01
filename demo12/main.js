const http = require('http')
const url = require('url')
const util = require('util')
const querystring = require('querystring')

// http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
//   res.end(util.inspect(url.parse(req.url, true)))
// }).listen(3000)


// http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
//
//   // 解析 url 参数
//   const params = url.parse(req.url, true).query
//   res.write(`姓名：${params.name}`)
//   res.write('\n')
//   res.write(`年龄：${params.age}`)
//   res.end()
// }).listen(3000)


var postHTML =
  '<html><head><meta charset="utf-8"><title>Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="age"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>'

http.createServer((req, res) => {
  // 定义了一个body变量，用于暂存请求体的信息
  let body = ''

  // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
  req.on('data', chunk => {
    body += chunk
  })

  // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回
  req.on('end', () => {
    // 解析参数
    body = querystring.parse(body)
    // 设置响应头部信息及编码
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' })

    if (body.name && body.age) { // 输出提交的数据
      res.write(`姓名：${body.name}`)
      res.write('<br>')
      res.write(`年龄：${body.age}`)
    } else {  // 输出表单
      res.write(postHTML)
    }
    res.end()
  })
}).listen(3000)




