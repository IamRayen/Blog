const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
        });
        console.log("DB Connected");
    } catch (err) {
        console.log(err);
    }
};

module.exports = connectDB;
