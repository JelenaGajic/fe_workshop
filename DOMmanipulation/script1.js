
window.addEventListener('load', function() {
    document.querySelector('#form').addEventListener('submit', myFn);
    console.log('load happend');
})

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#form').addEventListener('submit', myFn);
    console.log('DOMContentLoaded');
})

document.addEventListener('readystatechange', function() {
    if(document.readyState === 'interactive') {
        console.log('interactive');
    }
})

document.addEventListener('readystatechange', function() {
    if(document.readyState === 'loading') {
        console.log('loading');
    }
})

function myFn() {
    const name = document.querySelector('#name').value;
    alert(`Hello ${name}`);
}
        