const http = require('http')
const url = require('url')

const start = route => {
  http.createServer((request, response) => {

    const { pathname } = url.parse(request.url)

    console.log(`Request for ${pathname} received.`)

    route(pathname)

    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.write('Hello World')
    response.end()
  }).listen(9990)

  console.log('Server has started.')
}

exports.start = start
