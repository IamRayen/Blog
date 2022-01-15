const User = require("../Models/userSchema");

const jwt = require("jsonwebtoken");

const userMiddleware = async (req, res, next) => {
    try {
        const {token,userID} = JSON.parse(req.headers.jwt);
        const { role } = await User.findById(userID).select("role");
        if(!token){
            res.json({message:"no token, you must logIn"})
        }else if (role == "owner") {
            next()
        } else {
            const decoded = await jwt.verify(token, process.env.SECRET);
            if (decoded.id != userID) {
                res.json({message:"you re not the real user"});
            }
            next();
        }
    } catch (error) {
        res.json({error:"true",message: error.message,error:error });
    }
};

module.exports = userMiddleware;