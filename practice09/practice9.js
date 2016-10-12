// ## Fitting words
//
// Build a function that takes in a string and an array of strings. The function should output an array of strings that contain the same letters as the single input string.
//
// - Write a function that takes two parameters
// - Parameter 1 - A string
// - Parameter 2 - An array of strings
// - The function should output all the words from the input array (parameter 2) that are longer than the input string (parameter 1)
// - Example:
// - `var myArray = ['cat','caterpillar','whale','accurate','smile','cactus','cute'];`
// - `fittingWords('cat', myArray);`
// - Output - `['cat','caterpillar','accurate','cactus']`
function fittingWords(str, strArr){
    var strLength = str.length;
    var retArr = [];
    for (var i = 0; i < strArr.length; i++){
        if (strArr[i].length > strLength) retArr.push(strArr[i]);
    }
    return retArr;
}
console.log('result: ', fittingWords('cat',['doggy', 'piggy','yo','tight','cool','fun','sand','sea','air','swimming','yoga']));