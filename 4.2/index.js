const main = input => {
    
    const numbers = input.split('\n')[0].split(',');
    const boards = input.split('\n').slice(1).join('\n').slice(1).split(/\n\s*\n/).map(v => v.split('\n').map(v => v.split(' ').filter(v => v.trim() !== '').map(v=> [v,false])));

    const checkBoardsForWinners = () => {
        return boards.map((board, i) => {
            const boardHasWinningRow = board.some(row => row.every(v => v[1]));
            const boardHasWinningCol =  board[0].map((x,i) => board.map(x => x[i])).some(row => row.every(v => v[1]));
            return [i, boardHasWinningRow || boardHasWinningCol];
        });
    };

    const callNumber = number => {
        boards.forEach(board => {
            board.forEach(row => {
                row.forEach(v => {if(v[0] === number) v[1] = true});
            });
        });
    }; 

    let winners = [];
    let lastCall;
    for(let i = 0; i < numbers.length; i++){
        callNumber(numbers[i]);
        lastCall = numbers[i];
        const checkWinners = checkBoardsForWinners().filter(v => v[1]).filter(v => !winners.includes(v[0]));

        winners.push(...checkWinners.map(v => v[0]));
        if(winners.length === boards.length){
            break;
        }
    }

    const sumOfunmarked = boards[winners[winners.length-1]].flat().reduce((acc,curr) => {
        if(!curr[1]) acc += Number(curr[0]);
        return acc;
    },0);

    return lastCall * sumOfunmarked;
}

module.exports = main;