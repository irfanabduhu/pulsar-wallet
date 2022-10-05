const bcrypt = require("bcrypt");
const db = require("../db");

const User = db.model("user", {
	email: {
		type: String,
		required: true,
		unique: true,
	},
	username: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});

async function hashPassword(str) {
	const SALT_ROUNDS = 10;
	const hash = await bcrypt.hash(str, SALT_ROUNDS);
	return hash;
}

async function create(fields) {
	const hashed = await hashPassword(fields["password"]);
	Object.assign(fields, { password: hashed });
	const user = new User(fields);
	await user.save();
	return user;
}

async function get(email) {
	const user = await User.findOne({ email });
	return user;
}

module.exports = {
	get,
	create,
};
