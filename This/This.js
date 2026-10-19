// this = reference to the object where THIS is used 
//        (the object depends on the immediate context)
//         person.name = this.name

const person1 = {
    name: "Hsu Wint Wah Htet",
    FavFood: "Chocolate",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is drinking right now a ${this.FavFood} hot.`)},
}
const person2 = {
    name: "Ei Pone",
    FavFood: "Noodles",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating right now a ${this.FavFood} hot.`)},
}

person1.eat(); 
person2.eat(); 

// THIS function is not work with arrow function (=>)