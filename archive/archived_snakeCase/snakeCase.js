const snakeCase = function(s) {
    let a = s.split('');

    for(let i = 0; i < a.length; i++) {
        if (a[i] === ' ') {
            a[i] = '_';
        } else if (a[i] >= 'A' && a[i] <= 'Z') {
            a[i] = a[i].toLowerCase();
        } else if (a[i] < 'a' || a[i] > 'z') {
            a.splice(i, 1);
            i--;
        }
    }

    return a.join('');
};

// Do not edit below this line
module.exports = snakeCase;
