const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
const connectDB = require("./Config/connectDB");

const app = express();
app.use(cors());
app.use(express.json());

// app.use("/", require("./Routes/blogRoutes"));
app.use("/", require("./Routes/userRoutes"));

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`app Listening on ${PORT}`);
});
