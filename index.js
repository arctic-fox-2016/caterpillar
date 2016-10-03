const _ = require('./lib/lildash')


// isEmpty
console.log('----- isEmpty -----');
console.log(_.isEmpty([]));
console.log(_.isEmpty([1, 2, 3]))
console.log('\n');

// count
console.log('----- count -----');
console.log(_.count([]));
console.log(_.count([1, 2, 3]))
console.log('\n');

// head
console.log('----- head -----');
console.log(_.head([1, 2, 3]));
console.log(_.head([4, 5, 6]))
console.log('\n');

// tail
console.log('----- tail -----');
console.log(_.tail([1, 2, 3]));
console.log(_.tail([2, 3]))
console.log('\n');

// flatten
console.log('----- flatten -----');
console.log('Hasil flatten : ', _.flatten([1, [2, 3], 4, [5, [6, 7]]]));
console.log('\n');


// var data = [1, 2, 3]
// console.log(1, data.length - 1);
