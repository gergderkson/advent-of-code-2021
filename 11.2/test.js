import test from 'ava';
const method = require('./');
test('example 1', t => {

	const input = ["5483143223",	"2745854711",	"5264556173",	"6141336146",	"6357385478",	"4167524645",	"2176841721",	"6882881134",	"4846848554",	"5283751526",	];
	const result = method(input);
	t.is(result, 195);

});