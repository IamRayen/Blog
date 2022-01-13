const jwt = require("jsonwebtoken");

const userMiddleware = async (req, res, next) => {
    try {
        const {token,userID} = JSON.parse(req.headers.jwt);
        if (!token) {
            res.json({message:"no token, you must logIn"})
        } else {
            const decoded = await jwt.verify(token, process.env.SECRET);
            if (decoded.id != userID) {
                res.json({message:"you re not the real user"});
            }
            next();
        }
    } catch (error) {
        res.json({id:"getuser", message: error.message,error:error });
    }
};

module.exports = userMiddleware;