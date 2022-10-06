const bcrypt = require("bcrypt");
const passport = require("passport");
const Strategy = require("passport-local").Strategy;
const Users = require("../models/User");

passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((user, cb) => cb(null, user));

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
			next(null, user);
		} catch (err) {
			console.error(err);
			next(err, false);
		}
	}
);

passport.use("local-signin", SignInStrategy);

module.exports = {
	passport,
};
