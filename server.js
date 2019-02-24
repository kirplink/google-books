const express = require('express');

const bodyParser = require('body-parser');
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebookdb";
mongoose.connect(MONGODB_URI);

require("./routes/routes.js")(app);

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));