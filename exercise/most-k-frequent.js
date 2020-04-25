'use strict';
/**
 * Given a non-empty array of integers, return the K most frequent elements
 * 
 * Example  1:
 *  Input: nums = [1,1,1,2,2,3]; K=2
 *  Output: [1,2]
 * 
 * Example 2:
 *  Input: nums = [1]; K=1
 *  Output: [1]
 * 
 * Note: Assume K is alway valid. The input array will always have K unique most frequent elements.
 *      For Example: if nums = [1,1,2,2,3,3], K 'cannot' be 2 because there are no 2 unique most frequent elements
 *      In this example, only valid K is 3
 * 
 */

 module.exports.kMostFrequent = (input, k) => {
     const occurrence = new Map();
     //O(n)
     input.map(value => {
         if(occurrence.has(value)) {
             occurrence.set(value, (occurrence.get(value) + 1));
         } else {
             occurrence.set(value, 1);
         }
     });

     //Before the || operator we return 1 if a value is greather than b value
     //After the || only check equals value 
     //O(m)
     const orderedMap = new Map([...occurrence].sort((a, b) => {
         return (a[1] < b[1] && 1) || (a[1] === b[1] ? 0 : -1);
     }));

     //O(l)
     return [...orderedMap.keys()].slice(0,k);

 }



//  function kMost(input, k) {
//     const occurrence = new Map();
//     //O(n)
//     input.map(value => {
//         if(occurrence.has(value)) {
//             occurrence.set(value, (occurrence.get(value) + 1));
//         } else {
//             occurrence.set(value, 1);
//         }
//     });

//     //Before the || operator we return 1 if a value is greather than b value
//     //After the || only check equals value 
//     const orderedMap = new Map([...occurrence].sort((a, b) => {
//         return (a[1] < b[1] && 1) || (a[1] === b[1] ? 0 : -1);
//     }));

//     return [...orderedMap.keys()].slice(0,k);

// }