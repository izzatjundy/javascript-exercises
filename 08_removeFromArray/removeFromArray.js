const removeFromArray = function(a, e) {
    for(let i = 0; i < a.length; i++){
        if (a[i] === e) {
            a.splice(i, 1);
            i--; // Adjust index after removal
        }
    }

    return a;
};

// Do not edit below this line
module.exports = removeFromArray;
