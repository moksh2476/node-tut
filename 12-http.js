const http = require('http')

//parameters are request (req)(requesting from web browser) and the resonse (res)(what we will send back)
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    else if (req.url === '/about') {
        res.end('Welcome to our about page')
    }
    else {
        res.end('wrong page buddy')
    }
})

server.listen(1000)
