const mongoose = require("mongoose");


let user = mongoose.model("user", new mongoose.Schema({
    user: { type: String, required: true },
    pwd: { type: String, required: true },

}));


module.exports = user;