'use strict';

/**
 * Given an array number with integer values, with positive and negative numbers, you need to 
 * find a pair value which sum is equal than other given number, assum that the array comes sorted.
 * Example:
 *  Input: 
 *       input: [1,2,3,9]
 *       sum: 8
 *  Output:
 *       []
 * Example:
 *  Input:
 *      input: [1,2,4,4]
 *      sum: 8
 *  Output:
 *      [4,4]
 *  Example:
 *  Input: 
 *       input: [-1,2,3,9]
 *       sum: 8
 *  Output:
 *       [-1, 9]
 */

 /**
  * This methods use a force brute algorithm to search pairs into input array that satisfy sum input value
  * @param {number[]} input the input array with numbers
  * @param {number} sum the sum value to satisfy
  */
 module.exports.bruteForcePairSearch = (input, sum) => {
    for (let i = 0; i < input.length; i++) {
        const elementA = input[i];
        for (let j = 0; j < input.length; j++) {
            const elementB = input[j];
            if((elementA + elementB) === sum) {
                return [elementA, elementB];
            }
        }   
        
    }
    return [];
 }


/**
 * 
 * @param {number[]} input 
 * @param {number} sum 
 */
module.exports.binarySearchPairFind = (input, sum) =>  {
    for (const value of input) {
        const index = input.indexOf(sum-value);
        if (index !== -1) {
            return [value, input[index]];            
        }
    }
}

module.exports.searchByPairing = (input, sum) => {
    let low = 0;
    let hi = input.length - 1;

    while (low < hi) {
        const sumV = input[low] + input[hi];
        if( sumV === sum) {
            return [input[low] , input[hi]];
        }
        low += 1;
    }
    return [];
}
