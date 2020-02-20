function b() {
	var myVar;
	console.log(myVar);
}

function a() {
	var myVar = 2;
	console.log(myVar);
	b();
    console.log(this)
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);

// 1
// 2
// undefined
// 1


