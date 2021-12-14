
const main = (input) => {
    
    const caves = new Map();

    const isBigCave = cave => /^[A-Z]*$/.test(cave);

    input.map(v => v.split('-')).forEach(v => {
        if(!caves.has(v[0])) {
            caves.set(v[0], []);
        }
        caves.get(v[0]).push(v[1]);

        if(!caves.has(v[1])) {
            caves.set(v[1], []);
        }
        caves.get(v[1]).push(v[0]);
    });


    const traverseCaves = (fromName, visited, visitedSmallTwice) => {
        cave = caves.get(fromName);

        if (fromName === 'end') {
            return ['end'];
        }
    
        const visitCount = (visited.get(fromName) || 0) + 1;
        visited.set(fromName, visitCount);
    
        if (!isBigCave(fromName) && visitCount > 1) {
            visitedSmallTwice = true;
        }
    
        const paths = cave
            .filter(next => next !== 'start')
            .filter(cave => isBigCave(cave)|| !visited.has(cave) || visited.get(cave) < 1 || !visitedSmallTwice)
            .flatMap(next => traverseCaves(next, visited, visitedSmallTwice))
            .map(path => fromName.name + ',' + path);

        visited.set(fromName, visitCount - 1);
    
        return paths;
    }

    return traverseCaves('start', new Map(), false).length
}

module.exports = main;