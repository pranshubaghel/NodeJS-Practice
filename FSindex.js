const fs = require('fs');

//  synchronous way

// fs.writeFileSync('./sample.txt', "hey guys");
// console.log("File written successfully!");
// fs.writeFileSync('./sample.txt', " pls subscribe", {flag:"a"})

// Asynchronous way

fs.writeFile('./sample.txt', "hey pranshu", (err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("file written")
    }

    })