const User = require('../Models/user');
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        return res.status(200).json({ users ,role:users.role});
    } catch (error) {
        return res.status(500).json({ message: "Error finding users", error });
    }
};
module.exports = {
    getAllUsers,
};
