const main = (input) => {

    input = input[0].split(',').map(Number);

    const maxHorizontalPosition = Math.max(...input);
    const outcomes = [];
    
    for (let i = 1; i <= maxHorizontalPosition; i++) {
        outcomes.push(input.map(v => Math.abs(v - i)));
    }
    
    const fuelCosts = outcomes.map(v => v.reduce((a, b) => a + b));
    return Math.min(...fuelCosts);
}

module.exports = main;