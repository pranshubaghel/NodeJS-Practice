// const sum = (a,b)=>{
//     return a+b;
// };
// module.exports = sum;

// use another way...... with Sum And Substract

// const sum = (a,b) => {
//     return a+b;
// }

// const subs = (a,b) => {
//     return a-b;
// }

// // with the help of object
// module.exports = {
//     sum : sum,
//     subs: subs
// };

// if our Key and Value are same then we  can write as:
// module.exports = {
//     sum,
//     subs
// }

// after destuctring method we can write

module.exports.sum = (a,b) => {
    return a+b;
}
module.exports.subs = (a,b) => {
    return a-b;
}
