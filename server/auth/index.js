const bcrypt = require("bcrypt");
const passport = require("passport");
const Strategy = require("passport-local").Strategy;
const Users = require("../models/User");
const axios = require("axios");

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

async function validateToken(req, res, next) {
    const secretKey = process.env.SECRET_KEY;
    const { token } = req.body;
    const verifyURL = `https://www.google.com/recaptcha/api/siteverify`;

    try {
        const { data } = await axios({
            method: "post",
            url: verifyURL,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            data: {
                secret: secretKey,
                response: token,
                remoteip: req.socket.remoteAddress,
            },
        });

        if (data.success) return next();

        res.json({
            success: false,
            message: "Recaptcha failed",
            payload: err,
        });
    } catch (err) {
        res.json({
            success: false,
            message: "Internal Errors",
        });
    }
}

module.exports = {
    passport,
    validateToken,
};
