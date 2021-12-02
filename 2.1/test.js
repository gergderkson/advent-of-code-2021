import test from 'ava';
const method = require('./');
test('example 1', t => {
	const input = ["forward 5","down 5","forward 8","up 3","down 8","forward 2"];
	const result = method(input);
	t.is(result, 150);
});