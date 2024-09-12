// Singleton
// object.create


// Object Literals

const jusers = {
    Name: "Abdullah Akasha",
    Age: 21,
    City: "Faisalabad",
    Email: "abdulahakasha25@gmail.com",
    isLoggedIn: false,
    loggedInDays: ["Monday", "Friday"]
}

//  jusers.greeting = function(){
//     console.log("Hello Abdullah")
//  }
//  console.log(jusers.greeting())
 jusers.greetings = function (){
    console.log(`Hello ${this.Name}, Your age is ${this.Age}`)
 }
 console.log(jusers.greetings())

// console.log(jusers.Name)
// console.log(jusers["Email"])