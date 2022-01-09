const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: { type: String, required: true, trim: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "Normal" },
    posts:{type:[{ type: Schema.Types.ObjectId, ref: "blog" }],default:[]} ,
    feedback: {type:[String],default:[]},
});

module.exports = mongoose.model("user", userSchema);
