const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressSession = require("express-session");
const dotenv = require("dotenv").config();
const axios = require("axios");

const auth = require("./auth/index");
const api = require("./api");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
	expressSession({
		secret: "keyboard cat",
		resave: false,
		saveUninitialized: false,
	})
);

app.use(auth.passport.initialize());
app.use(auth.passport.session());

app.post(
	"/api/login",
	async (req, res, next) => {
		const { token } = req.body;
		const response = await axios.post(
			`https:///www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${token}`
		);
		if (response.status(200)) return next();
		console.error(response);
	},
	auth.passport.authenticate("local-signin"),
	api.login
);
app.post("/api/register", api.register);
app.get("/api/logout", api.logout);

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
