const express = require("express");
const app = express();
const path = require("path");
const ejsMate =  require("ejs-mate");
const mongoose = require("mongoose");

const MONGO_URL = 'mongodb://127.0.0.1:27017/tutorly';

main()
.then((req, res) => {
    console.log("Connected to DB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
};


app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));


// This is root route 
app.get("/", (req, res) => {
    res.send("Hello, I'm Root!!");
});

app.get("/home", (req, res) => {
    res.render("index.ejs");
});


// This makes route sure that if someone send GET request to any route except what's defined he'll get response as defined of "Page Not Found"
// I will make new page for this like so you won't see only "Page Not Found" but an actual interactive error page 
app.all(/.*/, (req, res) => {
    res.render("error.ejs");
});

app.listen(8080, () => {
    console.log("Server listing on port 8080");
});