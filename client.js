const net = require("net");
const client = net.createConnection({ port: 8080 }); //set up connection with server
client.on("data", msg => { console.log(`Message received from server: ${msg}`); }) //listening to event
