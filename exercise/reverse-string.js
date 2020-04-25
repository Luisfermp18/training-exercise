'use strict';

/**
 * This returns a new string reversed recursively
 * @param {String} str 
 */
module.exports.reverseStringRecursively = (str) => {
    //O(1)
    if(str === "") {
        return "";
    }
    //O(n)
    return this.reverseStringRecursively(str.substr(1)) + str.charAt(0);
}


/**
 * This returns a new string reversed using an decrementing loop
 * @param {String} str 
 */
module.exports.reverseStringDecrementing = (str) => {
    //O(1)
    if(str === "") {
        return "";
    } 

    let newStr = "";

    //O(n)
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
        
    }

    return newStr;
}

/**
 * This returns a new string reversed using built in function
 * @param {String} str 
 */
module.exports.reverseStringBuiltFunction = (str) => {
    //O(1)
    if(str === "") {
        return "";
    } 
    //O(n)
    return str.split("").reverse().join("");
}