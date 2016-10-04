let lib = require('./library/myFunctions')

console.log(lib.isEmpty([])) //true
console.log(lib.isEmpty([1,2])) //false

console.log(lib.count([])) //return 0
console.log(lib.count([1,2,3])) //return 3

console.log(lib.head([1,2,3])) //return 1
console.log(lib.head([4,5,7])) // return 4

console.log(lib.tail([1,2,3])) //return [2,3]
console.log(lib.tail([2,3])) //return [3]
console.log(lib.flatten([1, [2,3], 4, [5, [6,7], 8]])) //return [1,2,3,4,5,6,7,8]
