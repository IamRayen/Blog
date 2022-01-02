const jwt = require("jsonwebtoken");
const User = require("../Models/userSchema");

const authCheck = async (req, res, next) => {
    try {
        const token = req.headers.jwt;
        if (!token) {
            res.redirect("/login");
        } else {
            const decoded = await jwt.verify(token, process.env.SECRET);
            const user = User.findById(decoded.id);
            if (!user) {
                res.redirect("/login");
            }
            next();
        }
    } catch (error) {
        res.json({ message: error.message });
    }
};

module.exports = authCheck;
