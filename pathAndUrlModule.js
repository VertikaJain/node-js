// path Module
const path = require("path");
const pathName = "C:\\Users\\Vertika Jain\\Node JS Projects\\node-js\\events.js";
// parse() returns an object whose properties represent the given path
console.log(path.parse(__filename));
console.log(path.parse(__dirname));
console.log(path.basename(pathName));
console.log(path.dirname(pathName));
let pathObj = { dir: 'C:\\Users\\Vertika Jain\\Node JS Projects\\node-js', base: 'events.js' }
console.log(path.format(pathObj)); //converts object to string.

// url Module
const url = require("url");
const reqUrl = "http://localhost:8080/user?country=India&city=vizag";
const urlObj = url.parse(reqUrl, true); // converts url string to url object; If it set to true then the first token after the literal string // and preceding the next / will be interpreted as the host.
console.log(urlObj);
console.log(urlObj.query.country);
console.log(urlObj.query.city);