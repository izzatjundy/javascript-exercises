function pigLatin(string) {
    front = string[0];

    if (front === 'a' || front === 'e' || front === 'i' || front === 'o' || front === 'u') {
        return string + 'ay';
    } else {
        return string.slice(1) + front + 'ay';
    }
};
  
// Do not edit below this line
module.exports = pigLatin;
