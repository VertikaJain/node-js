const fs = require("fs");

// The JavaScript try-catch mechanism cannot be used to intercept errors generated by asynchronous APIs.
// Therefore, these can be handled either as a callback's first parameter, or as an 'error' event.
try {
    fs.readFile("EADME.md", (err, data) => {
        if (err) throw err;
        else console.log(data);
    });
} catch (err) { // does not get executed
    console.log("in Asynchronous catch block: ", err);
}
finally {
    console.log("in Asynchronous finally block");
}

// Synchronous code uses throw mechanism internally, thus the catch block gets executed.
try {
    const data = fs.readFileSync("read.md");
    console.log(data);

} catch (err) {
    console.log("in Synchronous catch block: ", err);
}
finally {
    console.log("in Synchronous finally block");
}


// Finally block will always execute after try block, irrespective of catch block being called.
// try catch can only handle run time errors, and not parse time errors such as missing brackets {}.