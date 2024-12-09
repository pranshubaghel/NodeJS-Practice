const http = require('http');
const server = http.createServer((req,res) => {

    const obj = {
        name: "pranshu",
        surname: "baghel"
    }

    res.writeHead(200,{"content-type": "application/json"})
    res.end(JSON.stringify(obj))
})

server.listen(3000, () => {
    console.log("server started")
})

    // or
// server.listen(3000)