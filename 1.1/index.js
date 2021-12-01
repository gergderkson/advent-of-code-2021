const main = input => {

	return input.map(v => parseInt(v)).map((v,i,arr) => {
		if(i === 0) return null;

		if(v > (arr[i-1])){
			return 'increase'
		}
		return 'decrease'
	}).filter(v =>  v === 'increase').length;

}
module.exports = main;