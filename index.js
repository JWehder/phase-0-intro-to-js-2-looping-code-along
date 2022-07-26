// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}

const gifts = ['teddy bear', 'drone', 'doll']

/*
function wrapGifts(gifts) {
    for(let gift of gifts) {
        console.log(gift);
    }
}
*/
// outputted the correct three gifts in the array

/* function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(gifts[i]);
    }
}
*/
// outputted the correct three gifts in the array

/*
function wrapGifts(gifts) {
    for (let gift in gifts) {
        console.log(gift);
    }
}
*/
// outputs 0, 1, & 2. This is used for objects mostly.

function writeCards(name, event) {
    const messages = [];
    for (let i = 0; i < name.length; i++) {
        messages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    console.log(messages)
    return messages
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");

function wrapGifts(gifts) {
    i = 0;
    while (i < gifts.length) {
        console.log(`Wrapped ${gifts[i]}!`);
        i++
    }
}

wrapGifts(gifts);

function countDown(integer) {
    while (integer >= 0){
        console.log(integer);
        integer--;
    }
}

// countDown(10);