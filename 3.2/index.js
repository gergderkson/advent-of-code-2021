const { split } = require('lodash');
const _ = require('lodash');

const main = input => {

	const getMostCommonInArray = arr => _(arr.join().split(',')).countBy().entries().maxBy(_.last)[0];
	const getLeastCommonInArray = arr => _(arr.join().split(',')).countBy().entries().minBy(_.last)[0];
	const getOccurrenceCount = (arr, val) => arr.join().split(',').filter(v => v === val).length;

	const flipArray = arr => input[0].split('').map((v, ii) => {
		return arr.reduce((acc, cur, i) => {
			if (acc[i] === undefined) acc[i] = [];
			acc[i].push(cur.split('')[ii]);
			return acc;
		}, []);
	});

	let co2Scrubber;
	let oxygenGenerator;

	let co2Input = [...input];
	input[0].split('').forEach((v, i) => {

		const flippedArray = flipArray(co2Input)

		const least = getLeastCommonInArray(flippedArray[i]);

		co2Input = co2Input.filter(v => v[i] === least);

		if (co2Input.length === 1) {
			co2Scrubber = co2Input[0];
		}
	});



	let oxygenInput = [...input];

	oxygenInput[0].split('').forEach((v, i) => {

		const flippedArray = flipArray(oxygenInput)

		let least = getLeastCommonInArray(flippedArray[i]);
		let most = getMostCommonInArray(flippedArray[i]);


		if (getOccurrenceCount(flippedArray[i], least) === getOccurrenceCount(flippedArray[i], most)) {
			most = '1';
		}

		oxygenInput = oxygenInput.filter(v => v[i] === most);
		if (oxygenInput.length === 1) {
			oxygenGenerator = oxygenInput[0];
		}

	});


	return parseInt(oxygenGenerator, 2) * parseInt(co2Scrubber, 2);
}
module.exports = main;