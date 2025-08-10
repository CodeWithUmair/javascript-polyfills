const um_var = [4, 5, 6, 7,8, 9];
console.log(um_var)

// um_var.forEach((item, i, self) => {
//     console.log(item, i, self)
// })

Array.prototype.umairForEach = function(callback) {
    if(!callback) {
        throw new Error("umairForEach Error: your callback is not function.");
    }

    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

um_var.umairForEach((item, i, self) => {
    console.log(item, i, self)
})