import test from 'ava';
const method = require('./');

test('example 1', t => {
	const input = ["199","200","208","210","200","207","240","269","260","263"];
	const result = method(input);
	t.is(result, 5);
});