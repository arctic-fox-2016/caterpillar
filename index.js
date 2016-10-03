const _ = require('./lib/my')

// Implementing isEmpty
console.log("\n\nisEmpty");
var value = []
console.log(`console.log(isEmpty(${value}) // ${_.isEmpty(value)}`)
var value = [1, 2, 3]
console.log(`console.log(isEmpty(${value}) // ${_.isEmpty(value)}`)

//Implementing count
console.log("\n\ncount");
var value = []
console.log(`console.log(count(${value})) // ${_.count(value)}`)
var value = [1, 2, 3]
console.log(`console.log(count(${value})) // ${_.count(value)}`)

// Implementing head
console.log("\n\nhead");
var value = [1, 2, 3]
console.log(`console.log(head(${value})) // ${_.head(value)}`)
var value = [4, 5, 7]
console.log(`console.log(head(${value})) // ${_.head(value)}`)

// Implementing tail
console.log("\n\ntail");
var value = [1, 2, 3]
console.log(`console.log(tail(${value})) // ${_.tail(value)}`)
var value = [2, 3]
console.log(`console.log(tail(${value})) // ${_.tail(value)}`)

// Implementing flatten
console.log("\n\nflatten");
var value = [1, [2, 3], 4, [5, [6, 7]]]
console.log(`console.log(flatten(${value})) // ${_.flatten(value)}`)
