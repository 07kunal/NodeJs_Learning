const http = require('node:http');

const server = http.createServer(function (req, res) {
    console.log('req33333',req);
    if (req.url === '/getSecretURL') {
        res.end("Hello but no secret");

    }
    res.end("Hello Jar");
});

server.listen(7777)