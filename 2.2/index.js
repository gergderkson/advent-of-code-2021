const main = input => {

	const output = input.reduce((position, current) => {

		const [direction, distance] = current.split(' ');

		if (direction === 'forward') {
			position.x += Number(distance)
			position.y += Number(distance) * position.aim;;
		}

		if (direction === 'down') {
			position.aim += Number(distance);
		}

		if (direction === 'up') {
			position.aim -= Number(distance);
		}

		return position;
	}, { y: 0, x: 0, aim: 0 });

	return output.x * output.y;
}
module.exports = main;