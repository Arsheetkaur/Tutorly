const mongoose = require("mongoose");
const intData = require("./data.js");
const User = require("../public/models/chat.js");


const MONGO_URL = 'mongodb://127.0.0.1:27017/tutorly';

main()
.then((req, res) => {
    console.log("Connected to DB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
};


const intDB = async () => {
    await User.deleteMany({});
    // await User.insertMany(intData.data);
    console.log("data initialized");
};

intDB();

