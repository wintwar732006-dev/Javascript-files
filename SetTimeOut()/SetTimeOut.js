// setTimeout()  = function in Javascript that allows you to
//                 schedule the execution of a function after 
//                 an amount of the (milliseconds)
//                 Times are approximate ( varies based on the workload
//                 of the Javascript runtime env.)
//               
//                 setTimeout(callback, delay); 
// clearTimeout(timeoutId) = can cancel a timeout before it triggers

/*
function sayHello(){
    window.alert("Hello"); 
}
setTimeout(sayHello, 3000); 
*/ 

//setTimeout(function(){window.alert("Hello My Love")}, 2000); 

//setTimeout(() => window.alert("Hello My Sweet Heart"), 3000); 

//const timeoutId = setTimeout(() => window.alert("Hello"), 3000); 

//clearTimeout(timeoutId); 
let timeoutId; 

function startTimer(){
    timeoutId = setTimeout(() => window.alert("Hello"), 3000); 
    console.log("STARTER"); 
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("CLEARED"); 
}