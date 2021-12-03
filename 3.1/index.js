const _ = require('lodash');

const main = input => {

	const getMostCommonInArray = arr => _(arr).countBy().entries().maxBy(_.last)[0];
	const getLeastCommonInArray = arr => _(arr).countBy().entries().minBy(_.last)[0];

 	const newArray = input[0].split('').map((v, ii) =>{
		return input.reduce((acc, cur, i) => {
			if(acc[i] === undefined) acc[i] = [];
			acc[i].push(cur.split('')[ii]);
			return acc;
		},[]);
	});

	return parseInt(newArray.map(getMostCommonInArray).join(''), 2) * parseInt(newArray.map(getLeastCommonInArray).join(''), 2);
}
module.exports = main;