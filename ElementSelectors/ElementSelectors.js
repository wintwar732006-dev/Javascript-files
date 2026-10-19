// element selectors = Methods used to target and manipulate HTML elements
//                     They allow you to select one or multiple HTML elements
//                     from the DOM (Document Object Model)

// 1. document.getElementById()               // ELEMENT OF NULL
// 2. document.getElementsClassName()         // HTML COLLECTION 
// 3. document.getElementsByTagName()         // HTML COLLECTION 
// 4. document.querySelector()                // ELEMENT OR NULL
// 5. document.querySelectorAll()             // NODELIST

/* 1. document.getElementById()

const myHeading = document.getElementById("my-heading"); 
myHeading.style.backgroundColor = "grey"; 
myHeading.style.textAlign = "center"; 
myHeading.style.color = "yellow"; 

console.log(myHeading); 

*/ 

// document.getElementByClassName(); 

// fruits = document.getElementsByClassName("fruits"); 
//fruits[0, 1, 2].style.backgroundColor = "red"; 

//for(let fruit of fruits){
//    fruit.style.backgroundColor = "aqua"; 
//}

//Array.from(fruits).forEach(fruit => {
//    fruit.style.backgroundColor = "aqua"; 
//})

// -------------- document.getElementByTagName() -----------------

const h4Elements = document.getElementsByTagName("h4"); 
const liElements = document.getElementsByTagName("li"); 

// h4Elements[0].style.backgroundColor = "aqua"; 

/*
for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "lightBlue"; 
}
for(let liElement of liElements){
    liElement.style.backgroundColor = "lightBlue"; 
}
    */

/*
Array.from(h4Elements).forEach(h4Element =>{
    h4Element.style.backgroundColor = "yellow"; 
}); 
Array.from(liElements).forEach(liElement =>{
    liElement.style.backgroundColor = "Aqua"; 
})
    */

/*
const element = document.querySelector("ul"); 
element.style.backgroundColor = "aqua";
*/

const foods = document.querySelectorAll("li"); 
//foods[1].style.backgroundColor = "aqua"; 

foods.forEach(food => {
    food.style.backgroundColor = "aqua"; 
})