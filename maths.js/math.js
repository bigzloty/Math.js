//String Manipulation Functions
// (1) Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}
// solving the problem
console.log(reverseString("hello")); 



// (2) Count Characters 
function countCharacters(str) {
    return str.length;
}
// solving the problem
console.log(countCharacters("hello")); 



// (3) Capitalize Words
function capitalizeWords(str){
    return str.split('').map(word=>
    word.charAt(0).toUpperCase() +
    word.slice(1)).join('');
}
// solving the problem
console.log(capitalizeWords("hello world")); 



// Array Functions
// (1) Find Maximum and Minimum
function findMaximum(arr){
    return Math.max(...arr);
}
function findMinimum(arr){
    return Math.min(...arr);
}
// solving the problem
console.log(findMaximum([1, 2, 3, 4, 5]));
console.log(findMinimum([1, 2, 3, 4, 5]));



//(2) Sum of Array
function sum0fArray(arr){
    return arr.reduce((acc, curr) => acc + curr, 0);
}
// solving the problem
console.log(sum0fArray([1, 2, 3, 4, 5]));



//(3) Filter Array
function filterArray(arr, condition){
    return arr.filter(condition);
}
// solving the problem (filter out even numbers)
console.log(filterArray([1, 2, 3, 4, 5], num => num % 2 !== 0)); 



// Mathematical Functions
//(1) Factorial
function factorial(n){
    if (n == 0){
        return 1;
    }
    return n * factorial(n - 1);
}
// solving the problem
console.log(factorial(5));



//(2) Prime Number Check
function isPrime(num){
    if (num <= 1){
        return false;
    }
    for (let i = 2; i < Math.sqrt(num) + 1; i++)
    {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
// solving the problem
console.log(isPrime(11));
console.log(isPrime(4));



//(3) Fibonacci Sequence
function fibonacci(n){
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const sequence = [0, 1];
    for (let i =2; i < n; i++){
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    } 
    return sequence;
}

//solving the problem
console.log(fibonacci(10));
