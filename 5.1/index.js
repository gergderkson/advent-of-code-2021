
const main = input => {

    const getPathCoordsBetweenPoints = (start, end) => {
        const delta = start.map((v, i) => end[i] - v);
        const distance = Math.max(...delta.map(v => Math.abs(v)));
        const direction = delta.map(v => v / distance);
        return [...Array(distance + 1)].map((_, i) => start.map((v, j) => v + direction[j] * i));
    };

    const matrixSize = input.map(v => v.split(' -> ').map(v=>v.split(',')).flat())
        .flat()
        .map(Number)
        .sort((x,y) => x-y)
        .pop();
    
    const matrix = Array.from({length: matrixSize+1}, () => Array.from({length: matrixSize+1}, () => 0));
    
    const plotsToPlant = input.map(v => v.split(' -> ').map(v=>v.split(',').map(Number)))
        .filter(v => v[0][0] === v[1][0] || v[0][1]  === v[1][1])
        .map(v => getPathCoordsBetweenPoints(v[0], v[1]));
    
    plotsToPlant.forEach(v => v.forEach(v => matrix[v[0]][v[1]] += 1));

    return matrix.flat().filter(v => v > 1).length;
}

module.exports = main;