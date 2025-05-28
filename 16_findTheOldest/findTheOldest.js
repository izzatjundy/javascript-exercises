const findTheOldest = function(people) {
    maxAge = 0;
    oldestPerson = null;
    currentYear = new Date().getFullYear();

    for(let person of people){
        if(person.yearOfDeath === undefined){
            if(currentYear - person.yearOfBirth > maxAge){
                maxAge = currentYear - person.yearOfBirth;
                oldestPerson = person;
            }
        }else{
            if(person.yearOfDeath - person.yearOfBirth > maxAge){
                maxAge = person.yearOfDeath - person.yearOfBirth;
                oldestPerson = person;
            }
        }
        
    }

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
