const fs = require('fs');
const day = process.argv[2];

const dontSplitDays = ['4.1', '4.2'];

let input = fs.readFileSync(`./${day}/input.txt`, 'utf8')

if(!dontSplitDays.includes(day)){
	input = input.split('\n');
}

let start = new Date();
const result = require(`./${day}`)(input);
let end = new Date();

console.log(`Result of ${day} is ${result}`);
console.log(`Completed in ${end-start}ms`);