// .filter() = creates a new array by filtering out elements

/* Example 1

let numbers = [1, 2, 3, 4, 5, 6, 7, 8]; 
let evenNums = numbers.filter(isEven); 
let oddNums = numbers.filter(isOdd); 

console.log(oddNums); 

function isEven(element){
    return element % 2 === 0; 
}
function isOdd(element){
    return element % 2 === 1; 
}
    Example 1 */

    /* Example 2

const ages = [15, 17, 17, 18, 19, 34]; 
const adults = ages.filter(isAdult);
const childrens = ages.filter(isChildren); 
const numsOfages = ages.filter(numsOfages); 


console.log(numsOfages); 


function isAdult(element){
    return element >= 18; 
}
function isChildren(element){
    return element <= 18; 
}
function numsOfages(element){
    return element.length; 
}
    */

// Example 3 

const words = ["apple", "orange", "banana", "kiwi",
               "pomegranate", "coconut"]; 
const ShortWords = words.filter(getShortWords); 
const LongWords  = words.filter(getLongWords); 

console.log(LongWords); 

function getShortWords(element){
    return element.length <= 5; 
}
function getLongWords(element){
    return element.length > 5; 
}
