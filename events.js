const events = require("events");
let usersLoggedIn = 0;
const eventEmitter = new events.EventEmitter(); //creating new event object using EventEmitter class
eventEmitter.on('userLoggedIn', () => { //binding event & event Handler
    usersLoggedIn++;
    console.log(usersLoggedIn);
})
eventEmitter.emit("userLoggedIn"); //generate an event

const fs = require("fs");
const watcher = fs.watch("events.js"); // watches for event in files as well as directories
watcher.on("change", () => { // the watch() method itself emits several different events like change,close,error
    console.log("file content changed...") 
});
/* We get output double times after saving it because a write to file triggers 2 events. */