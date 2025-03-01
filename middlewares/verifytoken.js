const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next)=>{
    const token = req.cookies?.token;
    if(!token){
        return res.status(401).json({message: "Unauthorized"});
    }
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err,decode)=>{
        if(err){
            return res.status(403).json({message: "forbidden"});
        }
        req.user = decode;
        next();
    })
}

module.exports = verifyToken;