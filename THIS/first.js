// 1. this keyword refers to an object, that object which is executing the current bit of javascript code.
// console.log(this);

// 2. Every javascript function while executing has a reference to its current execution context
// const user = {
//     data: [{
//         name: 'Pera',
//         age: 29
//     },
//     {
//         name: 'Nik',
//         age: 28
//     }],
//     mojeIme: function () {
//         console.log(this.data[0].name + ' i imam godina ' + this.data[0].age);
//     }
// }
// // user.clickHandler();
// document.getElementById('btn').addEventListener('click', user.mojeIme.bind(user))

// ------------------------------------

// 2.a)

function bike() {
  console.log('ovo je log f-je: ' + this.this.bike); // "ovo je log f-je "
}

var name = "Ninja";
var obj1 = { 
    name: "Pulsar", 
    bike: function () {
        console.log('ovo je log f-je: ' + this.name); // "ovo je log f-je "
    } 
};
var obj2 = { name: "Gixxer", bike: bike };

bike();           // "Ninja" --> default binding
obj1.bike();      // "Pulsar" --> implicit binding
obj2.bike();      // "Gixxer" --> implicit binding

// If we are in strict mode then the default value of this keyword is undefined otherwise this keyword act as global object, it’s called default binding of this keyword. (default is window object in case of browser).
// when there is an object property which we are calling as a method then that object becomes this object or execution context object for that method, it is implicit binding of this keyword.

// ------------------------
// It’s important to know how, when and from where the function is called, does not matter where function is declared.
// ------------------------

//-------------------------
// Explicit and Fixed Binding of “this” keyword


// 3. Explicit
function bike() {
  console.log(this.bike);
}

var name = "Ninja";
var obj = { name: "Pulsar" }

bike();           // "Ninja"
bike.call(obj);   // "Pulsar"



// 4. new keyword - this refers to the new instance

function Person(fn, ln) {
	this.first_name = fn;
	this.last_name = ln;

	this.displayName = function() {
		console.log(`Name: ${this.first_name} ${this.last_name}`);
	}
}

let person = new Person("John", "Reed");
person.displayName();  // Prints Name: John Reed
let person2 = new Person("Paul", "Adams");
person2.displayName();  // Prints Name: Paul Adams

// 5. this refers to the invoker object

// function foo () {
// 	'use strict';
// 	console.log("Simple function call")
// 	console.log(this === window); 
// }

// let user = {
// 	count: 10,
// 	foo: foo,
// 	foo1: function() {
// 		console.log(this === window);
// 	}
// }

// user.foo()  // Prints false because now “this” refers to user object instead of global object.
// let fun1 = user.foo1;
// fun1() // Prints true as this method is invoked as a simple function.
// user.foo1()  // Prints false on console as foo1 is invoked as a object’s method

// console.log(typeof foo);

// 6.  Every function has call, bind, and apply methods. These methods can be used to set a custom value to this in the execution context of the function

// function Person(fn, ln) {
// 	this.first_name = fn;
// 	this.last_name = ln;

// 	this.displayName = function() {
// 		console.log(`Name: ${this.first_name} ${this.last_name}`);
// 	}
// }

// let person = new Person("John", "Reed");
// person.displayName(); // Prints Name: John Reed
// let person2 = new Person("Paul", "Adams");
// person2.displayName(); // Prints Name: Paul Adams

// person.displayName.call(person2)

// 7. this keeps on referring to the same object it’s referring to outside of the function.

// const myObject = {
//   myMethod: () => {
//     console.log(this);
//   }
// };

// myObject.myMethod();

// const myObject = {
//   myArrowFunction: null,
//   myMethod: function () {
//     console.log(this);
//     this.myArrowFunction = () => { console.log(this) };
//   }
// };

// myObject.myMethod();
// // myObject.myArrowFunction();

// const myArrowFunction = myObject.myArrowFunction;
// myArrowFunction();

// source: https://www.w3schools.com/js/js_this.asp
// Homework: https://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/



