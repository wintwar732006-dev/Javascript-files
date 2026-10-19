// NodeList = Static collection of HTML elements by (id, 
//            class, element)
//            Can be created by using querySelectorAll()
//            Similar to an array, but no (map, filter, reduce)
//            NodeList won't update to automatically reflect changes 

let button = document.querySelectorAll(".MyButtons"); 

/* button.forEach(button => {
    button.style.color = "white"; 
    button.style.backgroundColor = "red"; 
}) */

// CLICK event listener 

 /* button.forEach(button =>{
   button.addEventListener("click", event => {
        event.target.style.backgroundColor = "yellow"; 
        
    })
}) */ 


// MOUSEOVER + MOUSEOUT event listener 

/* button.forEach(button => {
    button.addEventListener("mouseover", event =>{
        event.target.style.backgroundColor = "lightGreen"; 
    }); 
}); 
button.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "lightBlue"; 
    })
}) */ 

// ADD AN ELEMENT 

/* 
const newButton = document.createElement("button"); //STEP 1
newButton.textContent = "Button 5"; //STEP 2 
newButton.classList = "MyButtons"; 
document.body.appendChild(newButton); //STEP 3

button = document.querySelectorAll(".myButtons"); 
console.log(button); 
*/ 


// REMOVE AN ELEMENT 

button.forEach(button => {
    button.addEventListener("click", event => {
      event.target.remove(); 
      button = document.querySelectorAll(".MyButtons");
      console.log(button);  
    });
});