function printArray(array) {
    console.log('List of destination:');
    for (var j = 0; j < array.length; j += 1) {
        console.log("".concat(j + 1, " - ").concat(array[j]));
    }
}
printArray(['Swamp', 'Mountain', 'Ocean', 'Canyon']);
