const coins = require('./coins.json');
const tokens = require('./tokens.json');

module.exports = {
	coins,
	tokens,
	icons: {
		path: () => {
			const path = require('path');
			return path.join(__dirname, './icons');
		}
	}
};
