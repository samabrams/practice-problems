// ## FizzBuzz
//
// Build a function that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.
//
// - Write a function that takes no parameters
// - The function should output the numbers 1 through 100, following the rules from above
function fizzBuzz(){
    for (var i = 1; i < 101; i++){
        if (i % 5 == 0){
            if (i % 3 == 0){
                console.log('fizzbuzz');
            }
            else console.log('buzz')
        }
        else if (i % 3 == 0){
            console.log('fizz');
        }
        else console.log(i);
    }
}