const randomNumber = (thelength) => {
    let num = Math.floor(Math.random()*thelength);
    return num;
}

const greetings = ['Hi', 'Hello', 'Hey!', "What's Up?", 'Greetings my friend'];
const badJokes = ['What did the little mountain say to the bigger mountain? Hi Cliff!', "What do you call a hippie's wife? A Mississippi!", "What did the duck say when she bought a lipstick? Put it on my bill!", "What do bees do if they need a ride? Wait at the buzz stop!"];
const goodbyes = ['See you next time mate', 'Goodbye my friend', 'Next time is your turn', 'Bye, I wait untill you call me again'];


const theLine = (arr) => {
    let number = randomNumber(arr.length);
    return arr[number];
}

const theScript = (line1, line2, line3) =>{
    let a = theLine(line1);
    let b = theLine(line2);
    let c = theLine(line3);
    return `${a} Wanna hear a joke? 
${b}.
${c}. `;
}

console.log(theScript(greetings,badJokes,goodbyes));