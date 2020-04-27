'use strict';


/**
 * Given two numbers arrays check the diferences between both
 * Example:
 *     inputA: [1, 2, 3, 4, 5]
 *     inputB: [1,2,3,5]
 *     return [4]
 * @param {number[]} first 
 * @param {number[]} second 
 * @returns {number[]} with the data missing in the second input array
 */
module.exports.checkListMissingValues = (first, second) => {
    //O(n^2)
    return first.filter(value => !second.includes(value));
};

/**
 * Given two numbers arrays check the diferences between both
 * Example:
 *     inputA: [1, 2, 3, 4, 5]
 *     inputB: [1,2,3,5]
 *     return [4]
 * @param {number[]} first 
 * @param {number[]} second 
 * @returns {number[]} with the data missing in the second input array
 */
module.exports.checkListMissingValuesEnhanced = (first, second) => {
    let result = [];
    
    for (const val in first) {
        if (second.indexOf(val) === -1) {
            result.push(val);
        }
    }
    
    return result;
}