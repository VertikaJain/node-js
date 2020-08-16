// Program to open the requested file in the URL & display it's content to the client if it exists, 
// otherwise display error message. Using http, url & fs modules.

const http = require("http");
const url = require("url");
const fs = require("fs");

http.createServer((request, response) => {
    const pathName = url.parse(request.url, true).pathname;
    fs.readFile(pathName.substr(1), (err, data) => {
        if (err) {
            response.writeHead(404, { 'Content-Type': 'text/html' });
            response.end(`<p>THERE IS AN ERROR- <br>${err.toString()}</p>`);
        }
        else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(`<p>FILE CONTENT BELOW- <br>${data}!</p>`);
        }
    });
}).listen(8080, "localhost");