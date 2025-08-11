// const um_forEach = [4, 5, 6, 7,8, 9];
// console.log(um_forEach)

// // um_forEach.forEach((item, i, self) => {
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

// um_forEach.myForEach((item, i, self) => {
//     console.log(item, i, self)
// })


//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const umMap = [1, 2, 3, 4, 5];

// Array.prototype.myMap = function(callback) {
//     if(!callback) {
//         throw new Error("myMap Error: your callback is not function.");
//     }

//     const newArr = [];

//     for(let i = 0; i < this.length; i++) {
//         const result = callback(this[i], i, this);
//         newArr.push(result);
//     }

//     return newArr;
// }

// console.log(umMap.myMap((item) => {
//     return item * 5
// }))


//////////////////////////////////////////////////////////////////////////////////////////////////////////////


const umFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Array.prototype.myFilter = function(callback) {
    if(!callback) {
        throw new Error("myFilter Error: your callback is not function.");
    }

    const newArr = [];

    for(let i = 0; i < this.length; i++) {
        const result = callback(this[i], i, this);
        if(result) newArr.push(this[i]);
    }

    return newArr;
}

console.log(umFilter.myFilter((item) => {
    return item % 2 !== 0
}))
