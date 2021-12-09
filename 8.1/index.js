const _ = require('lodash');

const main = (input) => {
    
    return input.map(v => v.split(' | ').pop()).map(v => v.split(' ')).flat().filter(v => [2,4,3,7].includes(v.length)).length;
}

module.exports = main;