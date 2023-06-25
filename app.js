//MVC model view controller
const http = require('http')
const url = require('url')

const port = 3000

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello World')
  } else if (req.url === '/log-in') {
    res.end(`<button>Log in</button>`)
  }
})

server.listen(port)
