// nested objects = Objects inside of other Objects. 
//                  Allows you to represent more complex 
//                  data structures
//                  Child object is enclosed by a Parent Object 

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

/* Example 1

const person = {
    fullName: "Spongbob Squarepants",
    age: 30, 
    isStudent: true, 
    hobbies: ["karate", "jellyFishing", "cooking"], 
    address: {
        street: "124 Conch St.", 
        city: "Bikini Bottom", 
        Country: "Int. Water",
    }
}
for(const property in person.address){
    console.log(person.address[property]); 
}

console.log(person.address.Country); 

Example 1 */ 

//Example 2

class Person{
    constructor (name, age, ...address){
        this.name = name; 
        this.age = age; 
        this.address = new address(...address); 
    }
}

class Address {
    constructor(street, city, country){
        this.street = street; 
        this.city = city; 
        this.country = country; 
    }
}

const person1 = new Person("Spongbob", 30, "124 Conch St.", 
                                           "Bikini Bottom", 
                                           "Int. Water"); 

const person2 = new Person("Partick", 34, "128 Conch St.", 
                                           "Bikini Bottom", 
                                           "Int. Water"); 
const person3 = new Person("Squidward", 35, "126 Conch St.", 
                                           "Bikini Bottom", 
                                           "Int. Water"); 

console.log(person1.address); 