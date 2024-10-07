// const Profile = require('../models/profile');
const User = require('../Models/user');
const bcrypt = require("bcrypt");
// const jwt =require("jsonwebtoken")

const createUser = async (req, res) => {
    const { name, email, company, phone, role, password } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await User.create({
            name,
            email,
            company,
            phone,
            role,
            password: hashedPassword,
        });
        return res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Server error", error });
    }
};

module.exports = { createUser };