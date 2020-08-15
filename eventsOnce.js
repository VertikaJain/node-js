const events = require("events");
const eventEmitter = new events.EventEmitter();


eventEmitter.on("myEvent", data => console.log(data + " using ON method"));
eventEmitter.on("myEvent2", data => console.log(data + " using ON method"));
eventEmitter.once("myEvent3", data => console.log(data + " using ONCE method"));

console.log(eventEmitter.eventNames());
eventEmitter.emit("myEvent", 'EVENT1');
eventEmitter.emit("myEvent2", 'EVENT2');
eventEmitter.emit("myEvent3", 'EVENT3');
console.log(eventEmitter.eventNames());
eventEmitter.emit("myEvent", 'EVENT1');
eventEmitter.emit("myEvent2", 'EVENT2');
eventEmitter.emit("myEvent3", 'EVENT3');

/*
    once()-> events listened with once are only triggered once
    eventNames()-> displays the active events attached to the event listener
*/