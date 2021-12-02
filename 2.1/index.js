const main = input => {

	const output = input.reduce((position, current) => {
		
		const [direction, distance] = current.split(' ');

		if (direction === 'forward') {
			position.x += Number(distance);
		}

		if (direction === 'down') {
			position.y += Number(distance);
		}

		if (direction === 'up') {
			position.y -= Number(distance);
		}
		return position;

	}, { y: 0, x: 0 });

	return output.x * output.y;
}
module.exports = main;
