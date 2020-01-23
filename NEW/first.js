// 1. constructor

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new User("Jack");

// alert(user.name); // Jack
// alert(user.isAdmin); // false

// ------------------------------

// 2. When a function is executed with new, it does the following steps:

// A new empty object is created and assigned to this.
// The function body executes. Usually it modifies this, adds new properties to it.
// The value of this is returned. In the other words:

// function User(name) {
//   // this = {};  (implicitly)

//   // add properties to this
//   this.name = name;
//   this.isAdmin = false;

//   // return this;  (implicitly)
// }

// --------------------------------

// 3. So let user = new User("Jack") gives the same result as:

// let user = {
//   name: "Jack",
//   isAdmin: false
// };

// Now if we want to create other users, we can call new User("Ann"), new User("Alice") and so on. Much shorter than using literals every time, and also easy to read.

// That’s the main purpose of constructors – to implement reusable object creation code

// 4. (ADVANCED) Constructor mode test: new.target 

// function User() {
//     console.log(new.target);
// }

// // without "new":
// User(); // undefined

// // with "new":
// new User(); // function User { ... }

// ----------------------------------------------------

// 5. Usually, constructors do not have a return statement. Their task is to write all necessary stuff into this, and it automatically becomes the result.

// But if there is a return statement, then the rule is simple:

// If return is called with an object, then the object is returned instead of this.
// If return is called with a primitive, it’s ignored.

// function BigUser() {

//   this.name = "John";

//   return { name: "Godzilla" };  // <-- returns this object
// }

// alert( new BigUser().name );  // Godzilla, got that object

// function SmallUser() {

//   this.name = "John";

//   return; // <-- returns this
// }

// alert( new SmallUser().name );  // John

// ----------------------------------------------------

// 7 
// let user = new User; // <-- no parentheses
// // same as
// let user = new User();

// 6. Methods in constructor

// function User(name) {
//     this.name = name;

//     this.sayHi = function() {
//         alert("My name is: " + this.name);
//     };
// }

// let john = new User("John");

// john.sayHi(); // My name is: John

/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/

let obj = {}

function A() {
    return obj;
}

function B() {
    return obj;
}

let a = new A;
let b = new B;

alert(a == b); // true