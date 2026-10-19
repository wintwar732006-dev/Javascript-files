// ---------- Example1 <h1> --------------------

// STEP 1 CREATE THE ELEMENT
//1. const newH1 = document.createElement("h1"); 
const newListItem = document.createElement("li"); 

// STEP 2 ADD ATTRIBUTES/PROPERTIES
//1 newH1.textContent = "I like you!"; 
// newH1.id = "myH1"; 
// newH1.style.color = "brown"; 
// newH1.style.textAlign = "center"; 
// 2
newListItem.textContent = "coconut"; 
newListItem.id = "coconut"; 
newListItem.style.fontWeight = "bold"; 
newListItem.style.backgroundColor = "grey"; 

// STEP 3 APPEND ELEMENT TO DOM 
//document.body.append(newH1); 
//document.body.prepend(newH1); 
//document.getElementById("box1").append(newH1);
//document.getElementById("box4").prepend(newH1); 
//2 
//document.body.prepend(newlink); 
document.getElementById("fruits").append(newListItem); 
//const box2 = document.getElementById("box3"); 
//document.body.insertBefore(newH1, box3); 

//const boxes = document.querySelectorAll(".box"); 
//document.body.insertBefore(newH1, boxes[2]); 

// REMOVE HTML ELEMENT 
//document.getElementById("box1").removeChild(newH1); 