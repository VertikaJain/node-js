// Asynchronous callback: moreWork() & other operations are invoked before callback() of readfile()
const fs = require("fs");
fs.readFile("README.md", function callback(err, data) {
    console.log(data.toString()); // will be displayed at the end.
});
moreWork("async file reading...");

// Synchronous callback: moreWork() is invoked after callback() of greetings()
function greetings(callback) {
    callback();
}
greetings(() => {
    console.log("inside greeting callback method.");
});
moreWork("sync greetings...");

function moreWork(str) {
    console.log("performing more work: " + str);
}