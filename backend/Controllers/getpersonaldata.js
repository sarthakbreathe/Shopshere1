// const Profile = require("../models/profile");
const User = require("../Models/user");
const getProfile = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const response={
            name:user.name,
            role:user.role
            // profilepicture:user.profilepicture,
            // profile:user.profile
        }

        // console.log(user);
        return res.status(200).json(response );
        
    } catch (error) {
        return res.status(500).json({ message: "Server error", error });
    }
};

module.exports = { getProfile };
