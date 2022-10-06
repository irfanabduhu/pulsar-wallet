const mongoose = require("mongoose");

const DB_URI = process.env.MONGO_URI || "mongodb://localhost:27017/pulsar";

mongoose.connect(DB_URI);

module.exports = mongoose;
