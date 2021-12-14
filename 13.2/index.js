
const main = (input) => {
    
    const [coordStrings, instructionsStrings] = input.split('\n\n');

    const coords = coordStrings.split('\n').map(v => v.split(',').map(Number));
    
    const instructions = instructionsStrings.split('\n').map(v => v.split('fold along ')[1].split('='));

    const matrixSizeX = coords.map(v => v[0]).sort((a, b) => a - b).pop();
    const matrixSizeY = coords.map(v => v[1]).sort((a, b) => a - b).pop();

    let matrix = Array.from({length: matrixSizeY+1}, () => Array.from({length: matrixSizeX+1}, () => '.'));


	const flipArray = array => array[0].map((_, colIndex) => array.map(row => row[colIndex]));

    
    coords.forEach(v =>  matrix[v[1]][v[0]] = '#');

    instructions.forEach(instruction => {
        if(instruction[0] === 'x') {
            matrix = matrix.map(x => [x.slice(0,instruction[1]*1), x.slice(instruction[1]*1+1).reverse()])
                .map( v => v[0].map((j,i) => (j + v[1][i]).includes('#') ? '#' : '.'))
        }
        else{
            matrix = flipArray(matrix)
            matrix = matrix.map(x => [x.slice(0,instruction[1]*1), x.slice(instruction[1]*1+1).reverse()])
            .map( v => v[0].map((j,i) => (j + v[1][i]).includes('#') ? '#' : '.'))
            matrix = flipArray(matrix);
            matrix = flipArray(matrix);
            matrix = flipArray(matrix);
        }

    })

    console.log(matrix)
/**
 * 
 * The matrix result.... I just console logged it.  Mental.
 * 
'#''#''#''.''.''#''#''#''#''.''#''.''.''#''.''#''#''#''.''.''.''#''#''.''.''.''.''#''#''.''#''#''#''#''.''#''.''.''#''.'
'#''.''.''#''.''#''.''.''.''.''#''.''#''.''.''#''.''.''#''.''#''.''.''#''.''.''.''.''#''.''.''.''.''#''.''#''.''.''#''.'
'#''#''#''.''.''#''#''#''.''.''#''#''.''.''.''#''.''.''#''.''#''.''.''.''.''.''.''.''#''.''.''.''#''.''.''#''.''.''#''.'
'#''.''.''#''.''#''.''.''.''.''#''.''#''.''.''#''#''#''.''.''#''.''.''.''.''.''.''.''#''.''.''#''.''.''.''#''.''.''#''.'
'#''.''.''#''.''#''.''.''.''.''#''.''#''.''.''#''.''#''.''.''#''.''.''#''.''#''.''.''#''.''#''.''.''.''.''#''.''.''#''.'
'#''#''#''.''.''#''.''.''.''.''#''.''.''#''.''#''.''.''#''.''.''#''#''.''.''.''#''#''.''.''#''#''#''#''.''.''#''#''.''.'
 */
}

module.exports = main;