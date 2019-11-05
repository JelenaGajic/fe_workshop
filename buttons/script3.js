// 1. 

// document.getElementById("myBtn1").addEventListener("click", colorRed);
// document.getElementById("myBtn2").addEventListener("click", colorGreen);
// document.getElementById("myBtn3").addEventListener("click", colorBlue);

// function colorRed () {
//    document.getElementById("text").style.color = "red";
// }

// function colorGreen() {
//    document.getElementById("text").style.color = "green";
// }

// function colorBlue () {
//    document.getElementById("text").style.color = "blue";
//}

function changeColor() {
   document.getElementById("text").style.color = document.getElementById("myBtn1").getAttribute('data-color'); 
}

document.getElementById("myBtn1").addEventListener("click", changeColor);
