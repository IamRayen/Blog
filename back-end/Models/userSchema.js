const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: { type: String, required: true, trim: true, unique: true },
    name: String,
    lastName: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "Normal" },
    posts: [{ type: Schema.Types.ObjectId, ref: "blog" }],
    feedback: [String],
});

module.exports = mongoose.model("user", userSchema);
