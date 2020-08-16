// Translation of Domain names into IP addresses
const dns = require("dns");
console.log("DNS Servers: ", dns.getServers()); //Returns an array of IP address strings.
dns.lookup("nodejs.org", (err, ipAddress, ipFamily) => {
    //does not make a network request, instead uses the OS mechanism.
    if (err) console.log(err);
    else console.log(ipAddress); //IP address of the specified domain
    console.log(ipFamily); //IPv4 or IPv6
});

dns.resolve("github.com", (err, ipAddresses) => {
    //makes a network request to the domain specified, 
    // & returns an array of IP addresses associated with that domain name.
    if (err) console.log(err);
    else console.log(ipAddresses); //IP address of the specified domain
});
const options = {
    // all: true, //When true, the callback returns all resolved addresses in an array. Otherwise, returns a single address.
    family: 6, //default is 0.
    hints: dns.ADDRCONFIG | dns.V4MAPPED,
};
dns.lookup("nodejs.org", options, (err, ipAddresses) => {
    if (err) console.log(err);
    else console.log(ipAddresses);
});

dns.reverse("8.8.8.8", (err, domainName) => { //returns domain name associated with the given IP address.
    if (err) console.log(err);
    else console.log(domainName);
});

/* 
    resolve() & reverse() -> always perform a DNS query on the network. 
    This network communication is always done asynchronously, and does not use libuv's threadpool.

    lookup() -> uses the same operating system facilities as most other programs.
    Though the call to dns.lookup() will be asynchronous from JavaScript's perspective, 
    it is implemented as a synchronous call to getaddrinfo(3) that runs on libuv's threadpool. 
*/