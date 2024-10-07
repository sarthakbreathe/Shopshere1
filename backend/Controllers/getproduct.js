const Product = require('../models/Product');
 const getProduct = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;   
        const limit = parseInt(req.query.limit) || 8;
        const skip = (page - 1) * limit;              

        const products = await Product.find({}).skip(skip).limit(limit);
        
        const totalProducts = await Product.countDocuments();

        const totalPages = Math.ceil(totalProducts / limit);

        return res.status(200).json({
            products,
            currentPage: page,
            totalPages: totalPages,
        });
    } catch (error) {
        return res.status(500).json({ message: "Error fetching products", error });
    }
};

module.exports = {
    getProduct
};






// const Product = require('../models/Product');
// const getProduct = async (req, res) => {
//     try {
//         const users = await Product.find({});
//         return res.status(200).json({ users,role:users.role});
//     } catch (error) {
//         return res.status(500).json({ message: "Error finding users", error });
//     }
// };
// module.exports = {
//     getProduct
// };

