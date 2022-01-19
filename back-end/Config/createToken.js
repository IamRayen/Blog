const jwt = require("jsonwebtoken");

const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET);
};

module.exports = { createToken };
