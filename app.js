import "dotenv/config";
import express from "express";
import path from "path";
import session from "express-session";
import flash from "connect-flash";
import mainRouter from "./routers/index";
import swaggerSetup from "./src/common/swagger";

const app = express();

const PORT = process.env.PORT || 8005;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Data in session
app.use(session({
    name: 'Nodejs App',
    secret: JWT.SECRET,
    resave: false,
    saveUninitialized: true,
}));

// Flash message globelly define
app.use(flash());
app.use(function (req, res, next) {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});


app.use(swaggerSetup);
app.use(mainRouter);

app.use(express.static(path.join(__dirname + "/public")))  // Static path to show image in crome

app.listen(PORT, (err) => {
  if (err) throw new console.log("Server not connect");
  console.log(`Server is running on http://${process.env.HOST}:${PORT}`);
});