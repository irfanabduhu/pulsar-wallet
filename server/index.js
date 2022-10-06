const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressSession = require("express-session");
const dotenv = require("dotenv").config();
const path = require("path");
const Recaptcha = require("express-recaptcha").RecaptchaV2;

const auth = require("./auth/index");
const api = require("./api");

const app = express();
const recaptcha = new Recaptcha(process.env.SITE_KEY, process.env.SECRET_KEY);

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

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.post(
    "/api/login",
    recaptcha.middleware.verify,
    (req, res, next) => {
        if (!req.recaptcha.error) return next();
        next(); // skip reCAPTCHA validation for now
        // res.json({ success: false, payload: { error: "Recaptcha failed" } });
    },
    auth.passport.authenticate("local-signin"),
    api.login
);
app.post("/api/register", api.register);
app.get("/api/logout", api.logout);

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
