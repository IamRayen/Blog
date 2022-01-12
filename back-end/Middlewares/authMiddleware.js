const jwt = require("jsonwebtoken");
const User = require("../Models/userSchema");

const authCheck = async (req, res, next) => {
    try {
        const token = req.headers.jwt;
        if (!token) {
            res.json({id:"authcheck",message:"you re not logged"})
        } else {
            const decoded = await jwt.verify(token, process.env.SECRET);
            const user = User.findById(decoded.id);
            if (!user) {
                res.json({id:"authcheck",message:"invalid token"})
            }
            next();
        }
    } catch (error) {
        res.json({ id:"authcheck",message: error.message });
    }
};

module.exports = authCheck;
