const  _ = require("lodash");

const main = (input) => {

    const pairs = {
        '[' : ']',
        '{' : '}',
        '(' : ')',
        '<' : '>'
    };

    const scores = {
        ')': 1,
        ']': 2,
        '}': 3,
        '>': 4
    };

    const illegalLineIndexes = [];

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
                    illegalLineIndexes.push(i);
                    break;
                }
                stack.pop();
            }
        }
    }

    const incompleteLines = input.filter((v,i) => illegalLineIndexes.indexOf(i) === -1);
    const completionCharScores = [];

    for(let i = 0; i < incompleteLines.length; i++){
        const line = incompleteLines[i].split('');

        const openedChars = [];
        for(let j = 0; j < line.length; j++){
            const char = line[j];
            if(isStartChar(char)){
                openedChars.push(char);
            }
            else{
                const openedPair = _.toPairs(pairs).find((v) => v[1] === char)[0];
                openedChars.splice(openedChars.lastIndexOf(openedPair), 1);
            }
        }

        completionCharScores.push([0, ...openedChars.reverse().map(v=>scores[pairs[v]])]);
    }

    
    return completionCharScores.map( v => v.reduce((acc,v) => (acc*5)+ (v*1) , 0)).sort((a,b) => b-a)[Math.ceil(completionCharScores.length/2)-1];
}

module.exports = main;