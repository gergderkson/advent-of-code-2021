import test from 'ava';
const method = require('./');
test('example 1', t => {

	const input1 = 
`NNCB

CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C`
	const result1 = method(input1);
	t.is(result1, 1588);

});