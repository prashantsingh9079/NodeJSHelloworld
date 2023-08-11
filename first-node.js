const http = require('http')

const server = http.createServer((req,res) =>{
    console.log(req);
    res.setHeader('Content-Type','text/html');
    if(req.url==='/')
    {
        res.write('<html><head><title>NodeJS</title><body><h1>Response from node server</h1></body></html>')
    }
    if(req.url==='/home')
    {
        res.write('<html><head><title>NodeJS</title><body><h1>Welcome Home</h1></body></html>')
    }
    if(req.url==='/about')
    {
        res.write('<html><head><title>NodeJS</title><body><h1>About Page</h1></body></html>')
    }
    res.end()
})

server.listen(3000)