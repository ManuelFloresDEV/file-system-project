const fs = require("fs");

let read = fs.readFileSync("my-name.txt", "utf8");
console.log(read);
