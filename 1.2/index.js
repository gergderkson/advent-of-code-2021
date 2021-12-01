const R = require('ramda');

const main = input => {

	return R.aperture(3, input).map(R.sum).map((v,i,arr) => {
		if(i === 0) return null;

		if(v > (arr[i-1])){
			return 'increase'
		}
		return 'decrease'
	}).filter(v =>  v === 'increase').length;

}
module.exports = main;