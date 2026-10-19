// .map() = accepts a callback and applies that function 
//          to each element of an array, than return a
//          new array 

/* example 1
const numbers = [1, 2, 3, 4, 5]; 
const squares = numbers.map(square); 
const cubes = numbers.map(cube); 

console.log(cubes); 

function square(element){
    return Math.pow(element, 2); 
}
function cube(element){
    return Math.pow(element, 3); 
}
    Example 1 */

    /* Example 2


const students = ["Spongbob", "Patrick", "Squidward", "Sandy"];
const studentsUpperCase = students.map(upperCase); 
const studentsLowerCase = students.map(lowerCase); 

console.log(studentsLowerCase); 

function upperCase(element){
    return element.toUpperCase();
}
function lowerCase(element){
    return element.toLowerCase();
}
    Example 2 */

// Example 3

const dates = ["2023-5-2", "2024-6-25", "2025-1-30"]; 
const formattedDates = dates.map(formatDates); 

console.log(formattedDates); 

function formatDates(element){
    const parts = element.split("-"); 
    return `${parts[1]}/${parts[2]}/${parts[0]}`; 
}