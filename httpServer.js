const http = require("http");
http.createServer((req, res) => {
    const urlName = req.url.slice(1);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    console.log("STATUS: " + res.statusCode);
    res.end(`<h1>Hello ${urlName}!</h1>`); //end the response with a message to the client
}).listen(8080, "localhost");

// The first argument of the res.writeHead() method is the Status code, 200 means that all is OK, 
// the second argument is an object containing the response headers.