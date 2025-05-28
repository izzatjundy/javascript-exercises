const caesar = function(s, n) {
    a = s.split('');
    n = n % 26; // Normalize n to be within 0-25

    for (let i = 0; i < a.length; i++) {
        let charCode = a[i].charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) { // Uppercase letters
            a[i] = String.fromCharCode(((charCode - 65 + n) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
            a[i] = String.fromCharCode(((charCode - 97 + n) % 26) + 97);
        }
    }

    return a.join('');
};

// Do not edit below this line
module.exports = caesar;
