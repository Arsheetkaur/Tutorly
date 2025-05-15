const express = require("express");
const app = express();
const path = require("path");
const ejsMate =  require("ejs-mate");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

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
// app.use(express.static(path.join(__dirname, '../frontend')));
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));


// This is root route 
app.get("/", (req, res) => {
    res.send("Hello, I'm Root!!");
});

app.get("/home", (req, res) => {
    // res.send("home page")
    res.render("./pages/home.ejs");
});

app.get('/register', (req, res) => {
    res.render("./pages/register.ejs");
});

app.get('/login', (req, res) => {
    res.render("./pages/login.ejs");
});



// app.get("/history", async (req, res) =>  {
//     const chatItems = await Chat.find();
//     res.render("history.ejs", { chatItems });
// });

// app.get("/chat", (req, res) => {
//         res.sendFile(path.join(__dirname, '../frontend/pages/home.html'));
// })

// app.post("/chat", async (req, res) => {
//     const newChat = req.body.message;

//     await Chat.insertOne({"message": newChat});
//     res.redirect("history");

// })

// app.get("/:id/delete", (req, res) => {
//     res.send("deleted");
// });

// app.delete("/:id/delete", async (req, res) => {
//     let {id} = req.params;
//     await Chat.findByIdAndDelete(id);
//     res.redirect("/history");
// })

app.all(/.*/, (req, res) => {
    res.render("error.ejs");
});

app.listen(8080, () => {
    console.log("Server listing on port 8080");
});