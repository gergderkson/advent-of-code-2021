import test from 'ava';
const method = require('./');
test('example 1', t => {
	const input = ["2199943210","3987894921","9856789892","8767896789","9899965678"];
	const result = method(input);
	t.is(result, 15);

});