let fs = require("fs");

// Synchronous / Blocking code : morework() is called after console.log()
let data = fs.readFileSync("README.md").toString();
console.log(data);
moreWork("using Syncronization.");

// Asynchronous / Non-Blocking code : morework() is called before console.log()
fs.readFile("README.md", function (err, data) {
    if (err) throw err;
    console.log(data.toString());
});
moreWork("without using Syncronization.");

function moreWork(str) {
    console.log("performing more work " + str);
}

/* Non-blocking I/O operations allow a single process to serve multiple requests at the same time. 
Instead of the process being blocked and waiting for I/O operations to complete, 
the I/O operations are delegated to the system, so that the process can execute the next piece of code. 
Non-blocking I/O operations provide a callback function that is called when the operation is completed. */