// 1. HTML attributes

// function addColor() {
// const button = event.target;
// document.body.style.background = button.getAttribute('data-color');

// }

// https://developer.mozilla.org/en-US/docs/Web/API/Document/readystatechange_event

// 2. Decoupling from HTML

// window.addEventListener('load', function() {
//     // handling click on button 1
//     var btn1 = document.getElementsByClassName('button1')[0];
//     btn1.addEventListener('click', function() {
//         alert('you clicked button 1')
//     });
//     // handling click on button 2
//     var btn2 = document.getElementsByClassName('button2')[0];
//     btn2.addEventListener('click', function() {
//         alert('you clicked button 2')
//     });
// });


// 3. optimization button clicks

// function addClicks() {
//     var btns = document.getElementsByTagName("button");
//     for (var i = 0; i < btns.length; i++) {
//         btns[i].addEventListener("click", function() {
//             document.body.style.background = this.getAttribute('data-color');
//         });
//     }
// }
// document.addEventListener('DOMContentLoaded', addClicks )

// 3. setTimeout

setTimeout(function() {
    console.log('this is timeout log')
}, 5000);

// document.addEventListener('readystatechange', () => {
//     if(document.readyState === 'complete') {
//         setTimeout(function() {
//             console.log('I am here 10 seconds after');
//         }, 10000);
//         console.log("I am second alert"); 
//     }
// });

