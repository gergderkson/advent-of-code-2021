
const main = (input) => {
    
    const [coordStrings, instructionsStrings] = input.split('\n\n');

    const coords = coordStrings.split('\n').map(v => v.split(',').map(Number));
    
    const instruction = instructionsStrings.split('\n').map(v => v.split('fold along ')[1].split('='))[0];

    const matrixSizeX = coords.map(v => v[0]).sort((a, b) => a - b).pop();
    const matrixSizeY = coords.map(v => v[1]).sort((a, b) => a - b).pop();

    let matrix = Array.from({length: matrixSizeY+1}, () => Array.from({length: matrixSizeX+1}, () => '.'));

    coords.forEach(v =>  matrix[v[1]][v[0]] = '#');


    return matrix.map(x => [x.slice(0,instruction[1]*1), x.slice(instruction[1]*1+1).reverse()])
        .map( v => v[0].map((j,i) => (j + v[1][i]).includes('#') ? '#' : '.'))
        .flat()
        .filter(v => v === '#').length;
}

module.exports = main;