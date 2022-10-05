const express = require("express");
const cookieParser = require("cookie-parser");
const auth = require("./auth/index");
const api = require("./api");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.post("/api/login", auth.login, api.login);
app.post("/api/register", api.register);
app.get("/api/logout", api.logout);

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
