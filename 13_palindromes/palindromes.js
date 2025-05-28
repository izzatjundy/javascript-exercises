const palindromes = function (s) {
    s.toLowerCase();

    srev = s.split('').reverse().join('');

    return s === srev;
};

// Do not edit below this line
module.exports = palindromes;
