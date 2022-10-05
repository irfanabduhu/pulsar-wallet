const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressSession = require("express-session");

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

app.post("/api/login", auth.passport.authenticate("local-signin"), api.login);
app.post("/api/register", api.register);
app.get("/api/logout", api.logout);

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
