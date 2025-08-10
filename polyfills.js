// const myForEach = [4, 5, 6, 7,8, 9];
// console.log(myForEach)

// // myForEach.forEach((item, i, self) => {
// //     console.log(item, i, self)
// // })

// Array.prototype.myForEach = function(callback) {
//     if(!callback) {
//         throw new Error("myForEach Error: your callback is not function.");
//     }

//     for(let i = 0; i < this.length; i++) {
//         callback(this[i], i, this);
//     }
// }

// myForEach.myForEach((item, i, self) => {
//     console.log(item, i, self)
// })



//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const myMap = [1, 2, 3, 4, 5];

// Array.prototype.umMap = function(callback) {
//     if(!callback) {
//         throw new Error("umMap Error: your callback is not function.");
//     }

//     const newArr = [];

//     for(let i = 0; i < this.length; i++) {
//         const result = callback(this[i], i, this);
//         newArr.push(result);
//     }

//     return newArr;
// }

// console.log(myMap.umMap((item) => {
//     return item * 5
// }))