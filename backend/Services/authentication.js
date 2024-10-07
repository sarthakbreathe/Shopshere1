require('dotenv').config()
const JWT = require("jsonwebtoken");
const secret=process.env.JWT_SECRET

function createTokenForUser(user) {
    const payload ={
        _id:user._id,
        email:user.email,
        role:user.role
    }
    const token = JWT.sign(payload,secret)
    return token;
}

function validateToken(token){
    const payload=JWT.verify(token,secret);
    return payload
}


function authjs(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    try {
        // Validate the token
        const decoded = validateToken(token);
        req.user = decoded;  // Attach the decoded payload (user data) to the request object
        next();  // Move to the next middleware or route handler
    } catch (error) {
        return res.status(403).json({ message: "Invalid or expired token" });
    }
}

module.exports={
    createTokenForUser,
    validateToken,
    authjs
}