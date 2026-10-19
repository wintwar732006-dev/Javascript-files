// eventListener = Listen for specific events to create interactive pages 
//                 events: click, mouseover, mouseout
//                 .addEventListener(event, callback)

const myBox = document.getElementById("myBox"); 
const myButton = document.getElementById("myButton"); 
//function changeColor(event){
//    event.target.style.backgroundColor = "navy"; 
//    event.target.textContent = "Will you be my Valentine!?"; 
//}

myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "pink"; 
    event.target.textContent = "Will you be my valentine?💕"; 
    event.target.style.color = "white"; 
}); 
myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "black";
    event.target.textContent = "Click me (●'◡'●)"; 
    event.target.style.color = "pink"; 
}); 
myBox.addEventListener("mouseout", event =>{
    event.target.style.backgroundColor = "pink";
    event.target.textContent = "Right Now, U are my boyfriend!🫡"; 
    event.target.style.color = "black"; 
}); 
