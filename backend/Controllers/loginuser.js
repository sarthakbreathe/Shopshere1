const User = require('../Models/user');
const bcrypt = require("bcrypt");
const jwt =require("jsonwebtoken");
const { createTokenForUser } = require('../Services/authentication');

const loginUser = async (req, res) => {
    const { email, password } = req.body; 
    try {
        const user = await User.findOne({ email });
        console.log(email);
        
        if (!user) {
            return res.status(401).json({ message: "User not found or invalid credentials" });
        }
        const validuser = await bcrypt.compare(password, user.password);
        console.log(password);
        if (!validuser) {
            return res.status(401).json({ message: "Wrong Details" });
        }
        const token=createTokenForUser(user);
        res.cookie('token',token)
        // return res.status(200).json({ token,role:user.role,id:user._id });
        return res.status(200).json({ message: "Login successful",role:user.role,userId:user._id ,token});
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({ message: "Server Error", error });
    }
};
module.exports = { loginUser };