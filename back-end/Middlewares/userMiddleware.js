const jwt = require("jsonwebtoken");

const userMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.jwt;
        // res.json({token:token})
        if (!token) {
            res.json({message:"no token"})
        } else {
            const decoded = await jwt.verify(token, process.env.SECRET);
            const userid = req.params.userid
            if (decoded.id != userid) {
                res.json({message:"you re not the realy user"});
            }
            next();
        }
    } catch (error) {
        res.json({id:"getuser", message: error.message,error:error });
    }
};

module.exports = userMiddleware;