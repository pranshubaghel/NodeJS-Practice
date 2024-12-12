const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, {"content-type": "text/html"})
        res.end("home page")
    }
    else if (req.url === '/about') {
        res.writeHead(200, {"content-type": "text/html"})
        res.end("about page")
    }

    else if (req.url === '/service') {
        res.writeHead(200, {"content-type": "text/html"})
        res.end("servuce page")
    }
    else {
        res.writeHead(404, {"content-type": "text/html"})
        res.end("not found")
    }
})
server.listen(3000, () => {
    console.log("server started")
})