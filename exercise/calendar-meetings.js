'use strict';

/**
 * Given two calendar for two persons, return the times when them could have a meeting
 *  Sample:
 *      calendarA: [['9:00', '10:30'],['12:00', '13:00'],['16:00', '18:00']]
 *      dailyBoundsA: ['9:00', '20:00']
 *      calendarB: [['10:00', '11:30'],['12:30', '14:30'],['16:00', '17:00']]
 *      dailyBoundsB: ['10:00', '18:30']
 *      duration: 30
 *    Output: [['11:30', '12:00'],['15:00', '16:00'],['18:00', '18:30']]
 * @param {string[]} calendarA 
 * @param {string[]} calendarB 
 * @param {string[]} dailyBoundsA
 * @param {string[]} dailyBoundsB
 * @param {number} duration 
 */
module.exports.getMeetingHours = (calendarA, calendarB, dailyBoundsA, dailyBoundsB, duration) => {
    let bookedTime = [];
    let availableTimes = [];
    const calALenght = calendarA.length;
    const calBLenght = calendarB.length;
    let p1 = 0,
        p2 = 0;

    // This loop is used to get the booked times 
    while (p1 < calALenght && p2 < calBLenght) { //O(n+m)
        const comparation = compareTimes(calendarA[p1][0], calendarB[p2][0]);
        if (comparation === -1) { // 
            bookedTime.push(calendarA[p1])
            p1 += 1;
        } else {
            bookedTime.push(calendarB[p2]);
            p2 += 1;
        }
        // else {
        //     bookedTime.push(calendarA[p1]);
        //     p1 += 1;
        //     p2 += 1;
        // }
    }

    for (let i = 0; i < bookedTime.length; i++) { // O(n^2 + m)
        const end1 = bookedTime[i][1];
        if (i + 1 < bookedTime.length) {
            const start2 = bookedTime[i + 1][0];
            const timeComparation = compareTimes(end1, start2);
            if (timeComparation === -1) {
                const end2 = bookedTime[i + 1][1];
                if (compareTimes(end2, end1) === -1) {
                    bookedTime.pop(i + 1); //O(n)
                } else {
                    bookedTime[i][1] = end2;
                }
            }
        }

    }

    for (let j = 0; j < bookedTime.length; j++) {
        const end1 = bookedTime[j][1];
        const start2 = bookedTime[j][0];
        if (difTimes(end1, start2) >= duration) {
            availableTimes.push([end1, start2]);
        }
    }

    return availableTimes;
}

/**
 * 
 * @param {string} time with the time to convert in minutes. FORMAT OF THE TIME hh:MM
 * @returns {number} with the minutes
 */
const getMinutes = (time) => {
    if (time === '') {
        return 0;
    }

    const timeSplitted = time.split(":");
    const hour = timeSplitted[0],
        min = timeSplitted[1];

    return (Number(hour) * 60) + Number(min);
}

/**
 * Compare two string times
 * @param {string} t1 
 * @param {string} t2 
 */
const compareTimes = (t1, t2) => {

    const first = getMinutes(t1);
    const second = getMinutes(t2);

    if (first > second) {
        return 1; //Greater than
    } else if (first < second) {
        return -1; //Less than
    } else {
        return 0; //Equals
    }
}

/**
 * Returns the minutes difference between two dates
 * @param {string} t1 with the first time of the calendar to diff
 * @param {string} t2 with the second time of the calendar to diff
 */
const difTimes = (t1, t2) => {
    const first = getMinutes(t1);
    const second = getMinutes(t2);
    return first - second;
}