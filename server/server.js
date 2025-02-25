//imports required for server to contact bucket

const express = require("express");
const bodyParser = require("body-parser");
// require('dotenv').config();
const app = express();
const fileUpload = require("express-fileupload");

const sessionMiddleware = require("./modules/session-middleware");
const passport = require("./strategies/user.strategy");

// Route includes
const userRouter = require("./routes/user.router");
const shelfRouter = require("./routes/shelf.router");

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use("/api/user", userRouter);
app.use("/api/shelf", shelfRouter);

// Serve static files
app.use(express.static("build"));

app.use(fileUpload());

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
