const img = document.querySelector('img');

document.addEventListener('readystatechange', () => {
    console.log('readystate: ' + document.readyState);
});

console.log('readystate: ' + document.readyState);
window.onload = () => console.log('window loaded');

document.addEventListener('DOMContentLoaded', nekiFn);

function nekiFn() {
    console.log('DOMContentLoaded');
}

img.onload = () => console.log('image loaded');

document.addEventListener('readystatechange', () => {
    if (document.readyState === 'interactive') {
        function01();
    } else if (document.readyState === 'complete') {
        function02();
    }
});
function function01() {
    const a = 4;
    const b = 4;
    console.log(a + b);
};
function function02() {
    const a = 4;
    const b = 4;
    console.log(a * b);
};