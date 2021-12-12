const  _ = require("lodash");

const main = (input) => {

    input = input.map(v => v.split('').map(Number));
    
    const getAllAdjacent = (x, y) => {
        const up = input[x-1] ? [x-1,y] : null;
        const down = input[x+1] ? [x+1,y] : null;
        const left = input[x][y-1] ? [x,y-1] : null;
        const right = input[x][y+1] ? [x,y+1] : null;
        const upright = input[x-1] && input[x-1][y+1] ? [x-1,y+1] : null;
        const upLeft = input[x-1] && input[x-1][y-1] ? [x-1,y-1] : null;
        const downLeft = input[x+1] && input[x+1][y-1] ? [x+1, y-1] : null;
        const downRight = input[x+1] && input[x+1][y+1] ? [x+1,y+1] : null;

        return [up, down, left, right, upright, upLeft, downLeft, downRight].filter(v => v !== null)
    };

    let stepCount = 0
    let flashed = []

    const bumpAdjacent = (x, y) => {
        const adjacent = getAllAdjacent(x, y);
        
        adjacent.forEach(v => {
            const [x, y] = v;

            if(!hasFlashed(x, y)) {
                input[x][y] += 1;
                if(input[x][y] > 9) {
                    flash(x, y);
                    bumpAdjacent(x, y);
                }
            }
        });
    };

    const flash = (x, y) => {
        flashed.push([x,y].join(','));
    }

    const hasFlashed = (x, y) => flashed.indexOf([x,y].join(',')) !== -1;
    
    while(true){

        if(flashed.length === 100){
            break;
        }

        stepCount++;
            
        flashed.forEach(v =>{
            const [x,y] = v.split(',').map(Number);
            input[x][y] = 0;
        });

        flashed = [];

        for(let x = 0; x < input.length; x++) {
            for(let y = 0; y < input[x].length; y++) {
                input[x][y] += 1;
            }
        }

        for(let x = 0; x < input.length; x++) {
            for(let y = 0; y < input[x].length; y++) {

                if(input[x][y] > 9) {
                    if(!hasFlashed(x, y)) {
                        flash(x, y);
                        bumpAdjacent(x,y)
                    }
                }
            }
        }
    }
        
        
    return stepCount;
}

module.exports = main;