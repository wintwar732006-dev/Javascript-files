const clickButton = document.getElementById('click'); 

const colors = [ '#927464', '#245688', '#123456', '#654321', '#987654', '#6eb11b']; 
const colorsBtn =[ '#927464', '#245688', '#123456', '#654321', '#987654', '#6eb11b'];  

clickButton.addEventListener('click', () => {
    const randomBtn = Math.floor(Math.random() * colorsBtn.length); 
    const randomIndex = Math.floor(Math.random() * colors.length); 
    document.body.style.backgroundColor = colors[randomIndex];
    clickButton.style.backgroundColor = colorsBtn[randomBtn];  
});