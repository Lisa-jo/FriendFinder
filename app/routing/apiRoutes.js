const friends = require('../data/friends');
console.log(friends);
module.exports = (app) => {
	app.get('/api/friends', (req, res) => {
		res.json(friends);
	})

	app.post('/api/friends', (req, res) => {
		friends.push(req.body);
	})
};
