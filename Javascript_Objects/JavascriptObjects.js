// object = A collectio of related properties and/or methods
//          Can represent real world objects (people, 
//          products, places) object = {key : value, 
//                                      function()}

const person1 = {
    firstName: "SpongBob", 
    LastName: "SquarePants", 
    Age: 30, 
    IsEmployed: true,
    sayHello: function(){console.log("Hi! I am Spongbob!")}, 
    eat: function(){console.log("I am eating a Krabby Patty")},
}
const person2 = {
    firstName: "Patrick", 
    LastName: "Star", 
    Age: 31, 
    IsEmployed: false,
    sayHello: function(){console.log("Hi! I am Patrick!")}, 
    eat: () => console.log("I just eating seaweed."),

}

console.log(person1.IsEmployed); 
console.log(person1.Age); 
console.log(person1.firstName); 
console.log(person1.LastName); 

console.log(person2.IsEmployed); 
console.log(person2.Age); 
console.log(person2.firstName); 
console.log(person2.LastName); 

person1.eat(); 
person2.eat(); 