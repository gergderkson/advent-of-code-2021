
const main = (input) => {

    input = input.map(v=> v.split(''));
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
                lowPoints.push(currentItem);
            }

        }
    }
    
    return lowPoints.map(v => v*1+1).reduce((a,b)=> a+b*1, 0);
        
}

module.exports = main;