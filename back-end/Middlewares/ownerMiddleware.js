const User = require("../Models/userSchema");

const ownerMiddleware = async (req, res, next) => {
    try {
        const { role } = await User.findById(req.params.userid).select("role");
        if (role !== "owner") {
            return res.json({ message: "you're not auth" });
        }
        next();
    } catch (error) {
        res.json({ message: error.message });
    }
};

module.exports = ownerMiddleware;
