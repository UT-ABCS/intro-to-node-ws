const http = require("http");

// Server properties
const hostname = "127.0.0.1";
const port = 3000;

// Set up the server including how it responds to requests
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello from the server!");
});

// Have the server listen on a port
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});