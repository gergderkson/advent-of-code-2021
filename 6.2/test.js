import test from 'ava';
const method = require('./');
test('example 1', t => {
	const input = ["3,4,3,1,2"];
	const result = method(input, 18);
	t.is(result, 26);

	const result2 = method(input, 80);
	t.is(result2, 5934);

	const result3 = method(input);
	t.is(result3, 26984457539);

});