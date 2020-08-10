// Synchronous file handling (non-blocking)

const fs = require("fs");

// method to Synchronously read the entire content of a file.
let data = fs.readFileSync("fileHandling.js");
console.log(data.toString());

// method to Synchronously write data to a file, replacing the file if it already exists.
fs.writeFileSync("data.txt", "Writing non-blocking code.");

// method to Synchronously copy src to dest. By default, dest is overwritten if it already exists.
fs.copyFileSync("data.txt","data1.txt");

// method to Change the name or location of a file or directory.
fs.renameSync("data.txt", "data1.txt");

// method to Synchronously append data to a file, creating the file if it does not exist.
fs.appendFileSync("data.txt", "console.log('appending data...')");

// method to Synchronously delete a name and possibly the file it refers to.
fs.unlinkSync("data.txt");


// HANDLING DIRECTORIES
const dir = fs.readdirSync(__dirname); // returns an array of files/directories in the current directory.
console.log(dir);
fs.mkdirSync("new_dir_demo"); // create a new directory & returns an error if it already exists.
fs.renameSync("data.txt", "new_dir_demo/data.txt"); // move the file to the specified directory.
fs.watchFile("new_dir_demo/data.txt", () => { // Watch for changes in file. The callback listener will be called each time the file is accessed.
    console.log("data updated to file...");
})
fs.rmdirSync("new_dir_demo",{ recursive: true }); // deletes the directory & all its content.
// If the directory is not empty,  an optional recursive flag is used to delete all nested files and folders recursively.