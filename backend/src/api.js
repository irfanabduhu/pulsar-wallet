const User = require("./models/User");

async function register(req, res, next) {
	try {
		const { body } = req;
		const user = await User.create(body);
		res.json({ success: true, payload: user });
	} catch (err) {
		res.json({ success: false, payload: err });
	}
}

async function login(req, res) {
	res.json({ success: true, payload: req.user });
}

async function logout(req, res, next) {
	req.logout((err) => {
		if (err) return next(err);
		res.json({ success: true });
	});
}

module.exports = { register, login, logout };
