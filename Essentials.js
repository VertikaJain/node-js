// Process is a global object, with env property, describing the user info.
const name = process.env.USERNAME;
console.log(`hi ${name}`);

// Command Line Arguments
const arguments = process.argv.slice(2);
let sum = arguments.reduce((a, r) => a + parseInt(r), 0);
console.log(sum);

// OS Module & Environment
const os = require("os");
console.log(os.userInfo()); // system's user details
console.log(os.platform()); // OS name
console.log(os.release()); // version of OS
console.log(os.cpus()); // CPU details

console.log(__dirname); // path & name of current directory
console.log(__filename); // path & name of current file

// To create user-defined Evironment Variables, 
// use export command in terminal: export DATABASE_PASSWORD=password123, then access it using process.env
console.log(process.env.DATABASE_PASSWORD);