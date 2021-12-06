
const main = (input, days = 80) => {

    input = input[0].split(',').map(Number);

    for (let i = 0; i < days; i++) {
        const numberOf0s = input.filter(v => v === 0).length;
        input = input.map(v=> v === 0 ? v = 6 : v-1);
        [...Array(numberOf0s)].forEach(() => input.push(8));
    }

    return input.length
}

module.exports = main;