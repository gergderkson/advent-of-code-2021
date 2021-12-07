const main = (input) => {

    input = input[0].split(',').map(Number);

    const maxHorizontalPosition = Math.max(...input);

    const outcomes = [];
    
    for (let i = 1; i <= maxHorizontalPosition; i++) {
        outcomes.push(input.map(v => { 
            return Array.from(Array(Math.abs(v - i))).reduce((a, b, i) => a + 1 + i, 0);
        }));
    }
    
    const fuelCosts = outcomes.map(v => v.reduce((a, b) => a + b));
    return Math.min(...fuelCosts);

}

module.exports = main;