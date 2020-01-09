// Check if any permutation of the input string is palindrome 

const inputString = "anavolimilovana";

const isPalindrom = function(str) {
    let control = 0;
    for (let i = 0; i < str.length; i++) {
        // getting range [0, 31]
        let index = str[i].charCodeAt(0) - 97;
        if (index < 0) {
            index += 32;
        }
        // bitwise xor for anulating all of the pairs in string
        control = control ^ Math.pow(2, index);
    }
    
    // if only one char is left it has to be pow of 2
    return (Math.log(control)/Math.log(2)) % 1 === 0 || !(control);
}

console.log(isPalindrom(inputString));