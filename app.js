const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
//const cors = require("cors");
require("dotenv").config();

const indexRouter = require("./routes/index");
// TODO: Descomentar la siguiente línea cuando la autenticación esté completa
// const authRouter = require('./routes/auth')
const usersRouter = require("./routes/users");
const organizationRouter = require("./routes/organizations");
// const imageRouter = require("./routes/images");
// const newsRouter = require("./routes/news/news.router");
const contactsRouter = require("./routes/contacts");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', `${process.env.REACT_CLIENT_URL}`);
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use("/", indexRouter);
// TODO: Descomentar la siguiente línea cuando la autenticación esté completa
// app.use('/auth', authRouter)
app.use("/auth", usersRouter);
app.use("/organizations", organizationRouter);
// app.use("/images", imageRouter);
// app.use("/news", newsRouter);
app.use("/contacts", contactsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
