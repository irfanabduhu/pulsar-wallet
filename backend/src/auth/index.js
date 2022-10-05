const bcrypt = require("bcrypt");
const passport = require("passport");
const Strategy = require("passport-local").Strategy;
const Users = require("../models/User");

const SignUpStrategy = new Strategy(
	{ usernameField: "email", passwordField: "password" },
	async (email, password, next) => {
		try {
			const existingUser = await Users.get(email);
			if (existingUser) return next(null, false);
			const user = await Users.create({ email, password });
			return next(null, user);
		} catch (err) {
			next(err);
		}
	}
);

const SignInStrategy = new Strategy(
	{
		usernameField: "email",
		passwordField: "password",
	},
	async (email, password, next) => {
		try {
			const user = await Users.get(email);
			if (!user) return next(null, false);
			const isMatch = await bcrypt.compare(password, user.password);
			if (!isMatch) return next(null, false);
			next(null, { email: user.email });
		} catch (err) {
			next(err, false);
		}
	}
);

passport.use("local-signup", SignUpStrategy);
passport.use("local-signin", SignInStrategy);

const register = passport.authenticate("local-signup");
const login = passport.authenticate("local-signin");

module.exports = {
	register,
	login,
};
