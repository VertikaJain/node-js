// Useful in the case of I/O, http & fs while transfering large amount of data to/from files, network sockets.

const fs = require("fs");
const http = require("http");

http.createServer((req, res) => {
    const readFileStream = fs.createReadStream("largeFile.txt", "utf8");
    const writeFileStream = fs.createWriteStream("./writeStreamOutput.txt");

    // MANUALLY WRITING DATA BASED ON EVENT
    readFileStream.on("data", (chunk) => { // when data is received, execute the callback method.
        console.log("new chunk received...");
        writeFileStream.write(chunk); // writing data stream to a file (creates file if it does not exist)
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(chunk); // responding to the client with data 

        // Writing JSON data
        let jsonObj = { "name": "vj", "profile": "developer" };
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(jsonObj)); // client only accepts string or buffer.
    });

    // AUTOMATICALLY WRITING DATA USING PIPES 
    readFileStream.pipe(writeFileStream); // writing to file
    readFileStream.pipe(res); // responding to client 

    // In case of error.
    readFileStream.on("error", () => res.end(err));
    writeFileStream.on("error", () => res.end(err));

}).listen(8080, "localhost");

/*
    Advantage of using Stream of data: The processing does not have to wait for the loading of complete file.
    Data is divided into small chunks & then transferred to another file chunk by chunk.
    Hence data is received quicker at the client side.
*/