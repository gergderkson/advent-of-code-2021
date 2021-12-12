const  _ = require("lodash");

const main = (input) => {

    const pairs = {
        '[' : ']',
        '{' : '}',
        '(' : ')',
        '<' : '>'
    };

    const scores = {
        ')': 13,
        ']': 57,
        '}': 1197,
        '>': 25137
    };

    const illegalChars = [];

    const isStartChar = char => (char === '[' || char === '{' || char === '(' || char === '<');

    for(let i = 0; i < input.length; i++){
        const line = input[i].split('');
        let stack = [];

        for(let j = 0; j < line.length; j++){
            const char = line[j];

            if(isStartChar(char)){
                stack.push(char);
            } 
            else{
                if(pairs[stack[stack.length-1]] !== char){
                    illegalChars.push(char);
                }
                stack.pop();
            }
        }
    }

    return _(illegalChars).countBy(v=> scores[v]).toPairs().map(v => v[0]*v[1]).reduce((a,b)=> a + b, 0);
}

module.exports = main;