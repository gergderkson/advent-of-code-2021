const main = (input, days = 256) => {

    input = input[0].split(',').map(Number);
    let fishPerAge = Array.from({length: 9}, () => 0).map((v, i) => v = input.filter(v => v === i).length);

    for (let i = 0; i < days; i++) {
        const fishToBecome6 = fishPerAge[0];
        fishPerAge = fishPerAge.slice(1).concat(fishPerAge.slice(0, 1));
        fishPerAge[6] += fishToBecome6;
    }

   return fishPerAge.reduce((acc, curr) => acc + curr);
}

module.exports = main;