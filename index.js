'use strict';
const {
    kMostFrequent
} = require('./exercise/most-k-frequent');

const {
    reverseStringBuiltFunction,
    reverseStringDecrementing,
    reverseStringRecursively
} = require('./exercise/reverse-string');

// const {
//     getMeetingHours
// } = require('./exercise/calendar-meetings');



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



// console.log('======================================================================');
// console.log('===========================Calendar Meeting===========================');
// const calendarA = [
//     ['9:00', '10:30'],
//     ['12:00', '13:00'],
//     ['16:00', '18:00']
// ];
// const dailyBoundsA = ['9:00', '20:00'];
// const calendarB = [
//     ['10:00', '11:30'],
//     ['12:30', '14:30'],
//     ['16:00', '17:00']
// ];
// const dailyBoundsB = ['10:00', '18:30'];
// const duration = 30;
// console.log(`Reverse String using Built-In Function: Hello --> ${JSON.stringify(getMeetingHours(calendarA, calendarB, dailyBoundsA, dailyBoundsB, duration))}`);
// console.log('======================================================================');