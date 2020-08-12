// Networking requests can be machine independant & language independant
// http for web server, html & other content

const net = require("net");
const server = net.createServer(); // creates an instant of the server.
let connectedClients = [];
server.listen({ host: "localHost", port: 8080 }); // passing an object that has host & port properties.
server.on("connection", (client) => { //callback client is actually a ref to the client that is connected
    console.log("Client Connected Successfully.");
    let time = new Date().toISOString();
    client.write("Server message confirmation. " + time); // sends a msg to the client
    connectedClients.push(client);
});

setInterval(() => {
    const now = new Date().toISOString();
    for (let client of connectedClients) client.write(`How you doing? ${now}`);
}, 2000);