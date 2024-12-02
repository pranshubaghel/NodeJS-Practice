// const sum = require('./Sum')
// console.log("hello world")
// console.log(sum(4,6))
// console.log(sum(9,7))

// another way

// const calculate = require('./Sum')
// console.log('hello world')
// console.log(calculate.sum(5,4))
// console.log(calculate.subs(9,3))

    // By using Javascript distruchring method
    const calculate = require('./Sum')
    const {sum, subs} = calculate;
    console.log("hello world")
    console.log(sum(6,4))
    console.log(subs(7,3))