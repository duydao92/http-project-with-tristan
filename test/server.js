const http = require('http')
const port = 3000

const server = http.createServer(function(require, response) {
    response.end()
}).listen(port, function() {
    console.log(`This ${port} port works!!! `)
})
