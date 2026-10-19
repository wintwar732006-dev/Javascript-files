// sort() = method used to sort elements of an array in place
//          Sorts elements as strings in lexicographic order, 
//          not alphabetical 
//          lexicographic = (alphabet + numbers + symbols) as strings

let fruits = ["apple", "orange", "banana", "coconut", "pineapple"]; 

fruits.sort(); 
console.log(fruits); 

let numbers = [1, 5, 10, 2, , 4, 6, 3, 8, 7, 9]; 

numbers.sort((a, b) => a - b); 
numbers.sort((a, b) => b - a  ); 
console.log(numbers); 

const people = [{ name: "Spongbob", age: 30, GPA: 3.0},
                { name: "Patrick", age: 37, GPA: 1.5}, 
                { name: "Squidward", age: 51, GPA: 2.5}, 
                { name: "Sandy", age: 27, GPA: 4.0}]

people.sort((a, b) => a.name.localeCompare(b.name)); 
console.log(people); 