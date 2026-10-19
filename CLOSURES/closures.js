// closure = A function defined inside of another function
//           the inner function has access to the variables
//           and scope of the outer function. 
//           Allow for private variables and state maintenance
//           Used frequently in JS frameworks: React, Vue, Angular
 
/* 
--------------- Example 1 ------------------
function outer(){
 let myname = "Hsu Wint Wah Htet"; 
    function inner(){
        console.log(myname); 
    }
    inner(); 
}
outer(); 
------------------ Example 1 ------------------------
*/

/* --------------- EXAMPLE 2 -------------------

function createCounter(){
    let count = 0; 
    
    function increment(){
        count++; 
        console.log(`Count increased to ${count}`); 
    }
    function getCount(){
        return count;
    }
    return {increment, getCount}; 
}
const counter = createCounter(); 

counter.increment(); 
counter.increment(); 
counter.increment(); 
counter.increment(); 
counter.increment(); 


console.log(`The current count is ${counter.getCount()}`); 

----------------- EXAMPLE 2 ----------------- */ 

// ----------------- EXAMPLE 3 ------------------

function createGame(){
     
   let score = 0; 

    function increaseScore(points){
    score += points; 
    console.log(`+${points}pts`);
}
    function decreaseScore(points){
    score -= points; 
    console.log(`-${points}pts`);
}
    function getScore(){
    return score; 
}
    return{increaseScore, decreaseScore, getScore}; 
}

const games = createGame(); 

games.increaseScore(56); 
games.increaseScore(3); 
games.decreaseScore(6); 
console.log(`The final score is ${games.getScore()}pts`); 
