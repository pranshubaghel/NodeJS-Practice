const fs = require('fs');

//  synchronous way

fs.writeFileSync('./sample.txt', "hey guys");
console.log("File written successfully!");
