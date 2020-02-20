// https://javascriptissexy.com/understand-javascript-closures-with-ease/

// 1. A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function’s variables, and it has access to the global variables

// function showName (firstName, lastName) {
//     var nameIntro = "Your name is ";
//     // console.log(firstName);
//     // this inner function has access to the outer function's variables, including the parameter
//     function makeFullName () {
//         var firstName = 'NekoIme';
//         return nameIntro + firstName + " " + lastName;
//     }

        // const res = makeFullName ()

//     return res;
// }

// console.log(showName("Michael", "Jackson"));

// -----------------------------

// 2. Closures have access to the outer function’s variable even after the outer function returns
// function celebrityName(firstName) {
//     var nameIntro = "This celebrity is from outer function ";
//     // this inner function has access to the outer function's variables, including the parameter
//    function lastName (theLastName) {
//         return nameIntro + firstName + " " + theLastName;
//     }
//     return lastName;
// }

// var mjName = celebrityName("Michael"); // At this juncture, the celebrityName outer function has returned.

// // The closure (lastName) is called here after the outer function has returned above
// // Yet, the closure still has access to the outer function's variables and parameter
// console.log(mjName("Jackson")); // This celebrity is Michael Jackson

// --------------------------------

//3. check out excution-context.js for Function Invocation

// 4. Closures get more interesting when the value of the outer function’s variable changes before the closure is called. And this powerful feature can be harnessed in creative ways, such as this private variables example first demonstrated by Douglas Crockford: 
//
// function celebrityID () {
//     var celebrityID = 999;
//     return {
//         getID: function ()  {
//           return celebrityID;
//         },
//         setID: function (theNewID)  {
//             celebrityID = theNewID;
//         }
//     }
// }
// var mjID = celebrityID (); // At this juncture, the celebrityID outer function has returned.
// console.log(mjID.getID()); // 999
// mjID.setID(567); // Changes the outer function's variable
// mjID.getID(); // 

// 5. Because closures have access to the updated values of the outer function’s variables, they can also lead to bugs when the outer function’s variable changes with a for loop. Thus:

// This example is explained in detail below (just after this code box).
// function celebrityIDCreator (theCelebrities) {
//     var i;
//     var uniqueID = 100;
//     for (i = 0; i < theCelebrities.length; i++) {
//       theCelebrities[i]["id"] = function ()  {
//         conosole.log(i);
//       }
//     }

//     console.log(i);
//     console.log(theCelebrities);
//     return theCelebrities;
// }

// var actionCelebs = [{name:"Stallone", id: 0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];

// var createIdForActionCelebs = celebrityIDCreator (actionCelebs);

// var stalloneID = createIdForActionCelebs [0];
// console.log(createIdForActionCelebs[0].id()); // 103

// 6. fix for 5 IIFE



function celebrityIDCreator (theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
        theCelebrities[i]["id"] = function (j) {
            return function () {
                return uniqueID + j; 
            } ()
        } (i); 
    }

    return theCelebrities;
}

var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];

var createIdForActionCelebs = celebrityIDCreator (actionCelebs);

var stalloneID = createIdForActionCelebs [0];
console.log(stalloneID.id); // 100

// var cruiseID = createIdForActionCelebs [1];
// console.log(cruiseID.id);