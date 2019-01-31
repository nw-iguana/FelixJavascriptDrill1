function jediName(firstName, lastName) {
    return `${lastName.slice(0, 3)}${firstName.slice(0, 2)}`;
}

const result = jediName('Beyonce', 'Knowles');
console.log(result);

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