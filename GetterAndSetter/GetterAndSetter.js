// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property 

/* Example 1
class Rectangle {
     constructor (width, height){
        this.width = width; 
        this.height = height;
     }

     
      set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth; 
        }
        else{
            console.error("Width must be a positive number"); 
        }
     }
 set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight; 
        }
        else{
            console.error("Height must be a  number"); 
        }
     }
     get width(){
        return `${this._width} cm`;
     }
     get height(){
        return  `${this._height} cm`; 
     }
     get area(){
        return `${(this._width * this._height).toFixed(3)}cm`; 
     }


}
const rectangle = new Rectangle(3, 4); 

rectangle.width = 8; 
rectangle.height = 10; 

console.log(rectangle.width); 
console.log(rectangle.height); 
console.log(rectangle.area); 

Example 1 */

//Example 2

class Person{

    constructor (firstName, lastName, age){
        this.firstName = firstName; 
        this.lastName = lastName; 
        this.age = age; 
    }
    set firstName (newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName; 
        }
        else{
            console.error("First Name must be a non-empty string.")
        }
    }
      set lastName (newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName; 
        }
        else{
            console.error("Last Name must be a non-empty string.")
        }
    }
    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge; 
        }
        else{
            console.error("Age must be a non-negative number"); 
        }
    }
    get firstName(){
        return this._firstName; 
    }
     get lastName(){
        return this._lastName; 
    }
    get lastName(){
        return this._age; 
    }
    get FullName(){
        return this._firstName + " " + this._lastName; 
    }
    get age(){
        return this._age; 
    }

}
const person = new Person("Hsu", "Wint War Htet", 20);

console.log(person.firstName); 
console.log(person.lastName); 
console.log(person.age); 
console.log((`${person.FullName} is now ${person.age} years old.`)); 