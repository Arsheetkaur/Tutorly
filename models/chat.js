const {mongoose} = require("mongoose");
// const data = require("../init/data");
const Schema = mongoose.Schema;


const chatSchema = new Schema ({
    message: String,
    date: {
        type: Date,
        default: Date.now()
    }
});


module.exports = mongoose.model("Chat", chatSchema);