'use strict';
const {
    kMostFrequent
} = require('./exercise/most-k-frequent');

const {
    reverseStringBuiltFunction,
    reverseStringDecrementing,
    reverseStringRecursively
} = require('./exercise/reverse-string');

const {
    bruteForcePairSearch,
    binarySearchPairFind,
    searchByPairing
} = require('./exercise/finding-pairs-numbers');


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



console.log('======================================================================');
console.log('========================Finding Pairs numbers Methods========================');
const inputA = [1,2,3,9];
const sum = 8;
const inputB = [1,2,4,4];
const inputC = [-1,2,3,9];

console.log('==========================Brute Force Region==========================');
console.log(`Brute force find pair method with: input: ${JSON.stringify(inputA)}, sum: ${sum}--> ${bruteForcePairSearch(inputA, sum)}`);
console.log(`Brute force find pair method with: input: ${JSON.stringify(inputB)}, sum: ${sum}--> ${bruteForcePairSearch(inputB, sum)}`);
console.log(`Brute force find pair method with: input: ${JSON.stringify(inputB)}, sum: ${sum}--> ${bruteForcePairSearch(inputC, sum)}`);
console.log('======================================================================');
console.log('==========================Binary Search Region==========================');
console.log(`Brute force find pair method with: input: ${JSON.stringify(inputA)}, sum: ${sum}--> ${binarySearchPairFind(inputA, sum)}`);
console.log(`Brute force find pair method with: input: ${JSON.stringify(inputB)}, sum: ${sum}--> ${binarySearchPairFind(inputB, sum)}`);
console.log(`Brute force find pair method with: input: ${JSON.stringify(inputB)}, sum: ${sum}--> ${binarySearchPairFind(inputC, sum)}`);
console.log('======================================================================');
console.log('==========================Pair Search Region==========================');
console.log(`Brute force find pair method with: input: ${JSON.stringify(inputA)}, sum: ${sum}--> ${searchByPairing(inputA, sum)}`);
console.log(`Brute force find pair method with: input: ${JSON.stringify(inputB)}, sum: ${sum}--> ${searchByPairing(inputB, sum)}`);
console.log(`Brute force find pair method with: input: ${JSON.stringify(inputB)}, sum: ${sum}--> ${searchByPairing(inputC, sum)}`);
console.log('======================================================================');
