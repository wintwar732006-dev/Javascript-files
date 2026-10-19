/*

const decrease = document.getElementById('decrease'); 
const reset    = document.getElementById('reset'); 
const increase = document.getElementById('increase'); 

*/ 



//method 1 

/*
let count = 0; 

const valueDisplay = document.getElementById('valueDisplay'); 
const decrease = document.getElementById('decrease'); 
const reset    = document.getElementById('reset'); 
const increase = document.getElementById('increase'); 

function updateDisplay(){
     valueDisplay.textContent = count; 

     if(count > 0){
        valueDisplay.style.color = 'blue'; 
     }
     else if( count === 0){
        valueDisplay.style.color = 'black'; 
     }
     else{
        valueDisplay.style.color = 'red'; 
     }
    }

     decrease.addEventListener('click', () => {
        count--; 
        updateDisplay(); 
     });
     increase.addEventListener('click', () => {
        count++; 
        updateDisplay(); 
     })
     reset.addEventListener('click', () => {
        count = 0; 
        updateDisplay(); 
     }); 
*/

let count = 0; 

const value = document.querySelector('#valueDisplay'); 
const btns = document.querySelectorAll('.buttons button'); 

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e)  {
        const styles = e.currentTarget.classList; 

        if(styles.contains('decrease')){
            count--; 
        }
        else if(styles.contains('increase')){
            count++; 
        }
        else{
            count = 0; 
        }
    
         if(count > 0) {
            value.style.color = 'green'; 
         }
         else if(count === 0){
            value.style.color = 'black'; 
         }
         else{
            value.style.color = 'red'; 
         }
         value.textContent = count; 
    
    });
});