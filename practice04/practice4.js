// ## Sort
//
// Build a function that takes in an array of strings and outputs a new array with the same strings in alphabetical order.
//
// - Write a function that takes one parameter
// - Parameter 1 - An Array of strings
// - The function should output an array containing all the strings from the input array but in alphabetical order
// - Example:
// -`var myArray = ['mouse', 'cat', 'dog', 'human'];`
// - `sort(myArray);`
// - Output - `['cat', 'dog', 'human', 'mouse']`
// - Try doing this using a **Bubble Sort**, if you are unsure what that is <a href="https://www.google.com" target="_blank">Click Here</a>
function sort(strArr){
    var swapped = false;
    for (var i = 1; i < strArr.length; i++){
        if (strArr[i - 1] > strArr[i]){
            var temp = strArr[i];
            strArr[i] = strArr[i - 1];
            strArr[i - 1] = temp;
        }
    }
}