// Hash is an encrypted version of plain text.
// Algorithms used to create a Hash, only work in one direction, i.e. you cannot decrypt a hash.
// Useful for generating passwords. Can be checked by passing the hash in the algo.

const crypto = require("crypto");

const hash = crypto.createHash("md5")
    .update("password")
    .digest("hex");

console.log(hash);