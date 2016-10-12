// ## Numeric Spirals
//
// Build a function that takes one parameter and prints out the Fibonacci sequence based on the input parameter.
//
// - Write a function that takes one parameter
// - Parameter 1 - A number
// - The function should output the Fibonacci sequence to the number of spaces set by parameter 1 starting from zero.
// - Example:
// - `fibSequence(12);`
// - Output - `0 1 1 2 3 5 8 13 21 34 55 89`
// - If you are unfamiliar with the Fibonacci sequence <a href="https://www.google.com" target="_blank">Click Here</a>/
//  */
function numericSpirals(num){
    if (num < 1 || num % 1 != 0){
        alert("please enter a whole number of 1 or greater")
    }
    else if (num == 1){
        return [0];
    }
    else {
        var retArr = [0, 1];
        for (var i = 1; i < num - 1; i++){
            retArr.push(retArr[i] + retArr[i - 1]);
        }
        return retArr;
    }

}
console.log('testing with 3', numericSpirals(3));
console.log('testing with 4', numericSpirals(4));
console.log('testing with 12', numericSpirals(12));

