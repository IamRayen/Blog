const jwt = require("jsonwebtoken");

const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET /*, {expiresIn: 60*60*24}*/);
};

module.exports = { createToken };
