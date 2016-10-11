// ## One to Multi
//
// Build a function that sorts an array into a multidimensional array grouped by data type
//
// - Write a function that takes one parameter
// - Parameter 1 - An array of anything
// - The function should output a multidimensional array grouped by data type
// - Example:
// - `var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];`
// - `groupArray(myArray);`
// - Output - `[['hello, 'goodbye', '25'], [34, 56, 12], [true, false, true]]`
function oneToMulti(arr){
    var strArr = [];
    var numArr = [];
    var boolArr = [];
    var objArr = [];
    var arrArr = [];
    var multiArr = [strArr, numArr, boolArr, objArr, arrArr];
    var retArr = [];
    for (var i = 0; i < arr.length; i ++){
        switch(typeof arr[i]) {
            case 'string':
                strArr.push(arr[i]);
                break;
            case 'number':
                numArr.push(arr[i]);
                break;
            case 'boolean':
                boolArr.push(arr[i]);
                break;
            case 'object':
                if (Array.isArray(arr[i])) arrArr.push(arr[i]);
                else objArr.push(arr[i]);
                break;
            default:
                break;
        }
    }
    for (var i = 0; i < multiArr.length; i++){
        if (multiArr[i].length > 0) retArr.push(multiArr[i]);
    }
    return retArr;
}
var mixedArr = [2, 'cat', 18, 'puppy', true, {color: 'red'}, [1, 2, 3], 'dog'];
console.log('result: ', oneToMulti(mixedArr));