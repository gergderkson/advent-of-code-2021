const _ = require("lodash");

const main = (input) => {

    let [templateString, pairString] = input.split('\n\n');
    const pairs = pairString.split('\n').map(v => v.split(' ').filter(v => v !== '->'));

    for (let i = 0; i < 10; i++) {

        let templates = templateString.split('').map((v,i) => [v, templateString[i+1]] ).filter( v => v[1] !== undefined).map(v => v.join(''));
        const currentTemplate = [...templates];

        templates.forEach((template, t) => {
            pairs.forEach(pair => {
                
                if(pair[0] === template){
                    currentTemplate[t] = (() => {
                        let split = currentTemplate[t].split('');
                        split.splice(split.length/2, 0, pair[1]);
                        return split.join('')
                    })();
                    
                }
    
            });
    
        });

        templateString = currentTemplate.map((v,i) => i < currentTemplate.length-1 ?  v.split('').slice(0,-1).join('') : v).join('');
    }

    const counts = _(templateString.split('')).groupBy().map((v,k) => [k,v.length] ).sortBy( v => v[1]).value();
    return counts[counts.length-1][1] - counts[0][1]
}

module.exports = main;