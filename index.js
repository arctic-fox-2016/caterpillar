let lib = require('./lib/function.js')

console.log(lib.isEmpty([1,2]))
console.log(lib.head([4,5]))
console.log(lib.tail([4,5,6]))
console.log(lib.flatten([4,5,[8,9,10,[11,12]]]))
