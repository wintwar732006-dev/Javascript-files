// .reduce()  = reduce the elements of an array 
//             to a single valuse
         
/* Example 1
const prices = [5, 30, 10, 25, 15, 20]; 
const total = prices.reduce(sum); 

console.log(`$${total}`); 

function sum(accmulator, element){
    return accmulator+element; 
}
    Example 1 */

    // Example 2

const grades = [75, 50, 90, 80, 65, 95]; 
const maximum = grades.reduce(getMax); 
const minimum = grades.reduce(getMin); 

console.log(minimum); 

function getMax(accmulator, element){
    return Math.max(accmulator, element); 
}
function getMin(accmulator, element){
    return Math.min(accmulator, element); 
}