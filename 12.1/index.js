
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


    const traverseCaves = (fromName, visited) => {
        cave = caves.get(fromName);

        if (fromName === 'end') {
            return ['end'];
        }

        visited.add(fromName);

        const paths = cave
            .filter(cave => isBigCave(cave) || !visited.has(cave))
            .flatMap(next => traverseCaves(next, visited))
            .map(path => fromName + ',' + path);

        visited.delete(fromName);

        return paths;
    };

    return traverseCaves('start', new Set()).length
}

module.exports = main;