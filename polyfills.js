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


// const umFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Array.prototype.myFilter = function(callback) {
//     if(!callback) {
//         throw new Error("myFilter Error: your callback is not function.");
//     }

//     const newArr = [];

//     for(let i = 0; i < this.length; i++) {
//         const result = callback(this[i], i, this);
//         if(result) newArr.push(this[i]);
//     }

//     return newArr;
// }

// console.log(umFilter.myFilter((item) => {
//     return item % 2 !== 0
// }))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const umFind = [{id: 1, name: "Umair"}, {id: 2, name: "Momi"}, {id: 3, name: "Hadi"}];

// Array.prototype.myFind = function(callback) {
//     if(!callback) {
//         throw new Error("myFind Error: your callback is not function.");
//     }

//     for(let i = 0; i < this.length; i++) {
//         const result = callback(this[i], i, this);
//         if(result) {
//             return this[i];
//         }
//     }

//     return undefined;
// }

// console.log(umFind.myFind((item) => item.id === 2))


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const umSome = [-2, -3, 0, 4, 5, 6, 7];

// Array.prototype.mySome = function(callback) {
//     if(!callback) {
//         throw new Error("mySome Error: your callback is not function.");
//     }

//     for(let i = 0; i < this.length; i++) {
//         const result = callback(this[i], i, this);
//         if(result) {
//             return true;
//         }
//     }

//     return false;
// }

// console.log(umSome.mySome((item) => item > 5))


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const umEvery = [2, 3, 10, 4, 5, 6, 7];

// Array.prototype.myEvery = function(callback) {
//     if(!callback) {
//         throw new Error("myEvery Error: your callback is not function.");
//     }

//     for(let i = 0; i < this.length; i++) {
//         const result = callback(this[i], i, this);
//         if(!result) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(umEvery.myEvery((item) => item > 0))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const umReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Array.prototype.myReducer = function(callback, initialValue) {
if (typeof callback !== "function") {
    throw new Error("myReducer Error: callback is not a function.");
}

if (typeof initialValue !== "number" || isNaN(initialValue)) {
    throw new Error("myReducer Error: initialValue is not a valid number.");
}

    for(let i = 0; i < this.length; i++) {
        const result = callback(initialValue, this[i], i, this);
        initialValue = result;
    }

    return initialValue;
}

console.log(umReduce.myReducer((acc, curr) => acc * curr, 2))