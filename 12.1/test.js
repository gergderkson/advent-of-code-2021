import test from 'ava';
const method = require('./');
test('example 1', t => {

	const input1 = [
		"start-A",
		"start-b",
		"A-c",
		"A-b",
		"b-d",
		"A-end",
		"b-end"
	]
	const result1 = method(input1);
	t.is(result1, 10);


	const input2 = [
		"dc-end",
		"HN-start",
		"start-kj",
		"dc-start",
		"dc-HN",
		"LN-dc",
		"HN-end",
		"kj-sa",
		"kj-HN",
		"kj-dc",
	]
	const result2 = method(input2);
	t.is(result2, 19);

	const input3 = [
		"fs-end",
		"he-DX",
		"fs-he",
		"start-DX",
		"pj-DX",
		"end-zg",
		"zg-sl",
		"zg-pj",
		"pj-he",
		"RW-he",
		"fs-DX",
		"pj-RW",
		"zg-RW",
		"start-pj",
		"he-WI",
		"zg-he",
		"pj-fs",
		"start-RW",
	]
	const result3 = method(input3);
	t.is(result3, 226);
});