
const main = (input) => {

    input = input.map(v=> v.split('').map(Number));

    const lowPoints = [];

    const getAllAdjacent = (x, y) => {
        const up = input[x-1] ? input[x-1][y] : null;
        const down = input[x+1] ? input[x+1][y] : null;
        const left = input[x][y-1] ? input[x][y-1] : null;
        const right = input[x][y+1] ? input[x][y+1] : null;
        const upright = input[x-1] && input[x-1][y+1] ? input[x-1][y+1] : null;
        const upLeft = input[x-1] && input[x-1][y-1] ? input[x-1][y-1] : null;
        const downLeft = input[x+1] && input[x+1][y-1] ? input[x+1][y-1] : null;
        const downRight = input[x+1] && input[x+1][y+1] ? input[x+1][y+1] : null;

        return [up, down, left, right, upright, upLeft, downLeft, downRight]
    };


    for(let i = 0; i < input.length; i++){
        for(let j = 0; j < input[i].length; j++){

            const currentItem = input[i][j];
            const higherAdjacentPoints = getAllAdjacent(i, j).filter(v=> v !== null && v < currentItem);;

            if(higherAdjacentPoints.length === 0){
                lowPoints.push([i,j]);
            }
        }
    }
    

    const getBasinSize = coords => {
        
        const inBasin = coords => {
            return coords[0] >= 0 
                && coords[0] < input.length 
                && coords[1] >= 0 
                && coords[1] < input[coords[0]].length
                && input[coords[0]][coords[1]] < 9 
                && input[coords[0]][coords[1]] >= 0;
        };

        if (!inBasin(coords)){
            return 0;
        }

        input[coords[0]][coords[1]] = -1;

        return 1 + getBasinSize([coords[0] + 1, coords[1]])
            + getBasinSize([coords[0] - 1, coords[1]])
            + getBasinSize([coords[0], coords[1] + 1])
            + getBasinSize([coords[0], coords[1] - 1]);
    }   

    const basinSizes = lowPoints.map(v => getBasinSize(v))
    return basinSizes.sort((a,b) => b - a).slice(0,3).reduce((a,b) => a * b, 1);
}

module.exports = main;