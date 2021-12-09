const _ = require('lodash');

const main = (input) => {

    const values = [];

    for (let i = 0; i < input.length; i++) {
        let [pattern, signal] = input[i].split(' | ').map(v => v.split(' '));

        const one = pattern.find(v => v.length === 2);
        const four = pattern.find(v => v.length === 4);
        const seven = pattern.find(v => v.length === 3);
        const eight = pattern.find(v => v.length === 7);

        const twoThreeOrFive = pattern.filter(v => v.length === 5);
        const zeroSixNine = pattern.filter(v => v.length === 6);

        const eightSplit = eight.split('');

        const twoThreeFiveMissing = twoThreeOrFive.map(v => _.difference(eightSplit, v.split('')));
        const leftTwoSignals = twoThreeFiveMissing.filter(v => _.intersection(v, one.split('')).length === 0).flat();

        const three = twoThreeOrFive.filter(v => _.intersection(v.split(''), leftTwoSignals).length === 0)[0]; 
        
        const twoOrFive = twoThreeOrFive.filter(v => v !== three);
        const two = twoOrFive.filter(v => _.uniq([...four.split(''), ...v.split('')]).length === 7)[0];
        const five = twoOrFive.filter(v => v !== two)[0];

        const six = zeroSixNine.filter(v => _.uniq([...one.split(''), ...v.split('')]).length === 7)[0];

        const zeroOrNine = zeroSixNine.filter(v => v !== six);

        const zero = zeroOrNine.filter(v => _.uniq([...four.split(''), ...v.split('')]).length === 7)[0];
        const nine = zeroOrNine.filter(v => v !== zero)[0];

        
        const mapping = [zero, one, two, three, four, five, six, seven, eight, nine].map(v=> _.sortBy(v.split('')).join(''));;
        const signalsorted = signal.map(v=> _.sortBy(v.split('')).join(''));

        values.push(signalsorted.map(v => mapping.findIndex(x => v===x) ).join('')*1);
    }

    return values.reduce((a,b) => a+b, 0);

}

module.exports = main;