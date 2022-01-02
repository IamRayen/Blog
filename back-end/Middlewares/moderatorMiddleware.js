const { findById } = require("../Models/userSchema");
const User = require("../Models/userSchema");

const moderatorMiddleware = async (req, res, next) => {
    try {
        const { role } = await User.findById(
            req.params.userid /*,{role:1}*/
        ).select("role");
        if (role !== "moderator" && role !== "owner") {
            return res.json({ message: "you're not auth", role });
        }
        next();
    } catch (error) {
        res.json(error.message);
    }
};

module.exports = moderatorMiddleware;
