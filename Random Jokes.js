const randomNumber = (thelength) => {
    let num = Math.floor(Math.random()*thelength);
    return num;
}

console.log(randomNumber());

const greetings = ['Hi', 'Hello', 'Hey!', "What's Up?", 'Greetings my friend'];
const badJokes = ['What did the little mountain say to the bigger mountain? Hi Cliff!', "What do you call a hippie's wife? A Mississippi!", "What did the duck say when she bought a lipstick? Put it on my bill!", "What do bees do if they need a ride? Wait at the buzz stop!"];
const goodbyes = ['See you next time mate', 'Goodbye my friend', 'Next time is your tourn', 'Bye, I wait untill you call me again'];

console.log(greetings[0]);
console.log(badJokes[0]);
console.log(goodbyes[0]);
