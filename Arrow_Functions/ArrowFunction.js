// arrow functions = a concise way to write function
//                   expressions good for simple functions
//                   that you use only once 
//                   (parameter) => some code

/* Example 1
const hello = (name, age) => { console.log(`Hello ${name}`)
                      console.log(`Your are ${age}  years old.`)}; 
hello("Wint Wah", 20); 

Example 1 */ 

// example 2 // setTimeout ( () => console.log("Hello"), 6000); 

// Example 3

const numbers = [1, 2, 3, 4, 5, 6]; 

const squares = numbers.map( (element) => Math.pow( element, 2)); 
const cubes = numbers.map( (element) => Math.pow (element, 3)); 
const evenNums = numbers.filter((element) => element % 2 === 0); 
const oddNums  = numbers.filter((element) => element % 2 === 1); 
const total    = numbers.reduce((accmulator, element) => accmulator + element); 
console.log(total); 