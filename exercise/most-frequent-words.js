'use strict';

/**
 * Given an string with a random text, return back the most frequent words used excluding some words
 * @param {string} text the text to search most used words
 * @param {string[]} exclusions the differents words to exclude
 */
module.exports.getMostFrequentlyUsedWords = (text, exclusions) => { // First delete special characters O(n)
    text = text.toLowerCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, " ");
    // Split the array to get all words O(m)
    let words = text.split(/\b/);
    // Delete blank space O(l)
    words = words.filter(word => !/[\s]+/.test(word));
    // Filter words to exclude O(j)
    words = words.filter(word => !exclusions.includes(word.toLowerCase()))

    // Using ES6 map is the most efficient data structure to handle repeating words
    let map = new Map();
    // O(k)
    words.map(word => {

        if (map.has(word)) {
            map.set(word, map.get(word) + 1);
        } else {
            map.set(word, 1);
        }
    });

    let arr = [];
    let maxCount = 0;
    // For the last step, only need to search the keys on the map with greather value key
    // O(h)
    map.forEach((value, key) => {
        if (value >= maxCount) {
            arr.push(key);
            maxCount = value;
        }
    });

    // O(n+m+l+j+k+h)
    return arr;
}
