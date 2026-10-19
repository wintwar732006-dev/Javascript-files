// callback = a function that is passed as an argument 
//            to another function. 

// ........... used to handle asynchronous operations: 
// ........... 1. Reading a file 
// ........... 2. Network requests 
// ........... 3. Interacting with database

// ........... "Hey, when you're done, call this next".

/* first example 

wait(hello); 
function hello(){
    console.log("Hello"); 
}
function wait(callback){
    console.log("wait"); 
    callback(); 
}
function leave(){
    console.log("leave"); 
}
function goodbye(){
    console.log("goodbye"); 
} */ 


  // second example
  
  sum(displayPage, 98076,54367); 

  function sum(callback, x, y) {
    let result = x + y; 
    callback(result);
  }

  function displayConsole(result){
    console.log(result); 
  }

  function displayPage(result) {
    document.getElementById("myh1").textContent = result; 
  }