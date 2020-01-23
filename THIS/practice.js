// 1. What will be the output?

// let user = {
//     name: "John",
//     go: function() { alert(this.name) }
// };

// (user.go)()

// -----------------------------------------

// 2. Explain the value of "this"

// let obj, method;

// obj = {
//     go: function() { alert(this); }
// };

// obj.go(); // (1) output?


// (obj.go)(); // (2) output?

// (method = obj.go)(); // (3) output?

// (obj.go || obj.stop)(); // (4) output?

// Here we have a more complex call (expression).method(). The call works as if it were split into two lines:

// -----------------------------------------

// 3. Using "this" in object literal

// window.name = 'Mali Pera';

// function makeUser() {
//     return {
//         name: "John",
//         ref: this
//     };
// };

// let user = makeUser();
// console.log(user.ref.name); // What's the result?

// -----------------------------------------

// 4. Create an object calculator with three methods:
// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

let calculator = {
    read: function() {
        var a = prompt('First number is');
        this.first = a;
        var b = prompt('Second number is');
        this.second = b;
    },
    sum: function() {
        return Number.parseInt(this.first) + Number.parseInt(this.second);
    },
    mul: function() {
        return this.first * this.second
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// Chaining - HOMEWORK

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//     },
//     down() {
//         this.step--;
//     },
//     showStep: function() { // shows the current step
//         alert(this.step);
//     }
// };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1

// ladder.up().up().down().showStep(); // 1