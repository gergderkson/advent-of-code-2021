import test from 'ava';
const method = require('./');
test('example 1', t => {

	const input = ["00100","11110","10110","10111","10101","01111","00111","11100","10000","11001","00010","01010"];
	const result = method(input);
	t.is(result, 230);
});