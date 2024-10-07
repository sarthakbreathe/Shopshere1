const Product = require('../models/Product');
const getProductTable = async (req, res) => {
    try {
        const users = await Product.find({});
        return res.status(200).json({ users,role:users.role});
    } catch (error) {
        return res.status(500).json({ message: "Error finding users", error });
    }
};
module.exports = {
    getProductTable
};