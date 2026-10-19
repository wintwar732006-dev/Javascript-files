
const navbar = document.querySelector(".navbar"); 
const button = document.getElementById("button"); 

button.addEventListener("click", () => {
    navbar.classList.toggle("ham"); 
}); 