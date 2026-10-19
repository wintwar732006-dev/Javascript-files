// DOM Navigation = The process of navigating through the structure 
       //           of an HTML document using Javascript 
       
// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// ------------------- .firstElementChild ------------------

/* const element = document.getElementById("fruits"); 
   const firstChild = element.firstElementChild; 
   firstChild.style.backgroundColor = "aqua"; */

/* const ulElements = document.querySelectorAll("ul"); 

   ulElements.forEach(ulElement => {
       const firstChild = ulElement.firstElementChild; 
       firstChild.style.backgroundColor = "aqua"; 
}) */ 

       // ------------ .lastElementChild ----------------

/* const element = document.getElementById("fruits"); 
   const lastChild = element.lastElementChild; 
   lastChild.style.backgroundColor = "aqua"; */

/* const ulElements = document.querySelectorAll("ul"); 

   ulElements.forEach(ulElement => {
       const lastChild = ulElement.lastElementChild; 
       lastChild.style.backgroundColor = "aqua"; 
   }) */

// ---------------- .nextElementSibling -----------------

/* const element = document.getElementById("fruits"); 
   const nextSibling = element.nextElementSibling;
   nextSibling.style.backgroundColor = "aqua";  */ 

   // ---------------- .previousElementSibling ------------

/* const element = document.getElementById("desserts"); 
   const previousElement = element.previousElementSibling; 
   previousElement.style.backgroundColor = "black"; 
   previousElement.style.color = "yellow"; */ 

// ------------- .parentElement -----------------

/* const element = document.getElementById("ice cream"); 
   const parent = element.parentElement; 
   parent.style.backgroundColor = "aqua"; */ 

// ---------------- .children -----------------
const element = document.getElementById("vegetables"); 
const child = element.children;

// Array.from(child).forEach(child => {
// child.style.backgroundColor = "aqua"; 
// })

child[1].style.backgroundColor = "aqua"; 