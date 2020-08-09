const fs = require("fs"); //using fs module for file handling

// file system method to read the content of a file, using file name, format & a necessary callback fn.
// returns an error message if the file does not exist.
fs.readFile("app.js", 'utf8', function (err, data) {
    console.log(data);
    console.log(err);
});

// fs method to write content to file 
// 1. creates a new file if it does not exists
// 2. if it exists than it replaces the existing data
fs.writeFile("app.js", "console.log('save the planet');", function (err) {
    console.log("data written to file.");
})

// fs method to append data at the end of given file
// creates a new file if it does not exist
fs.appendFile("app.js", "console.log('climate change')", function (err) {
    console.log("data appended to file.");
})

// fs method to delete existing file
// returns an error message in case the file does not exist
fs.unlink("app.js", function (err) {
    console.log("File deleted successfully.");
    console.log(err);
})