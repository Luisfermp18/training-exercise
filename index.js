'use strict';
const {
    kMostFrequent
} = require('./exercise/most-k-frequent');

const {
    reverseStringBuiltFunction,
    reverseStringDecrementing,
    reverseStringRecursively
} = require('./exercise/reverse-string')



console.log('======================================================================');
console.log('=======================K-most Frequent Elements=======================');
const firstInput = [3, 1, 1, 1, 2, 2, 2, 2, 3];
const K = 2;
const secondInput = [1];
const J = 1;
console.log(`K-Most: INPUT {${JSON.stringify(firstInput)}}, K: [${K}] `);
console.log(`K-Most: OUTPUT {${JSON.stringify(kMostFrequent(firstInput, K))}} `);
console.log('======================================================================');
console.log(`K-Most: INPUT {${JSON.stringify(secondInput)}}, J: [${J}] `);
console.log(`K-Most: OUTPUT {${JSON.stringify(kMostFrequent(secondInput, J))}} `);
console.log('======================================================================');


console.log('======================================================================');
console.log('========================Reverse String Methods========================');
console.log(`Reverse String using Built-In Function: Hello --> ${reverseStringBuiltFunction("hello")}`);
console.log(`Reverse String using Decrementing Loop: Hello --> ${reverseStringDecrementing("hello")}`);
console.log(`Reverse String using Recursively: Hello --> ${reverseStringRecursively("hello")}`);
console.log('======================================================================');