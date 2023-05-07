function nextInLine(arr, item) {
    // Only hange code below this line
    arr.push(item);
    const removed = arr.shift();
    return removed;
    // Only change cod above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));