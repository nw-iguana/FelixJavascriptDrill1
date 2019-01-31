function getYearOfBirth(age) {
    if (age < 0) {
        throw new Error("Age cannot be negative.");
    }
    return 2016 - age;
}
function createGreeting(name, age) {
    if (!(name && age)) {
        throw new Error("Arguments not valid.");
    }
    const yearOfBirth = getYearOfBirth(age);
    return `Hi, my name is ${name} and I\'m ${age} years old. I was born in ${yearOfBirth}.`;
}

try {
    const greeting1 = createGreeting();
    console.log(greeting1);
}
catch(error) {
    console.log(error);
}