import test from 'ava';
const method = require('./');
test('example 1', t => {
	const input = ["16,1,2,0,4,2,7,1,2,14"];
	const result = method(input);
	t.is(result, 168);

});