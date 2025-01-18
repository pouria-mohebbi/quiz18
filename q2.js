function simulateFilter(array, callback) {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}

function callback(num) {
    return num > 2;
}

const numbers = [1, 2, 3, 4, 5];
const greaterThanTwo = simulateFilter(numbers, callback);
console.log(greaterThanTwo); 
