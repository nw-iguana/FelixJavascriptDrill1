// Jedi Name
function jediName(firstName, lastName) {
    return `${lastName.slice(0, 3)}${firstName.slice(0, 2)}`;
}

const result = jediName('Beyonce', 'Knowles');
console.log(result);

// To Infinity...
function beyond(num) {
    if (num === Infinity || -Infinity) {
        console.log('And beyond');
    }
    else if (num > 0) {
        console.log('To infinity');
    }
    else if (num < 0) {
        console.log('To negative infinity');
    }
    else if (num === 0) {
        console.log('Staying home');
    }
    else {
        console.log('What are you trying to accomplish here');
    }
}

beyond(Infinity);

// Cracking the code - I think I've accidentally tried to use charAt on an array? I need to trace back some of my steps and rethink this.
function decode(word) {
    if (word.charAt(0) === 'a') {
        return word.charAt(1);
    }
    else if (word.charAt(0) === 'b') {
        return word.charAt(2);
    }
    else if (word.charAt(0) === 'c') {
        return word.charAt(3);
    }
    else if (word.charAt(0) === 'd') {
        return word.charAt(4);
    }
    else {
        return ' ';
    }
}

const message = 'craft block argon meter bells brown croon droop'
let messageArray = message.split(" ");
console.log(messageArray);

function decodeSentence(sentence) {
    let result = "";
    for (let i = 0; i < sentence.length; i++) {
        let decodedLetter = sentence[i].charAt();
        result = result + decodedLetter;
        return result;
    }
}
console.log(decodeSentence(messageArray));